<?php

declare(strict_types=1);

namespace Converge\Commands;

use Exception;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Process;
use RuntimeException;
use Symfony\Component\Process\ExecutableFinder;
use Symfony\Component\Process\Process as SymfonyProcess;

class ConvergeBuildCommand extends Command
{
    /**
     * The console command name.
     *
     * @var string
     */
    protected $signature = 'converge:build 
                                {--dev       : Build in development mode}
                                {--watch     : Watch for changes}
                                {--poll=1000 : File polling interval in milliseconds}
                                {--force     : Force rebuild even if files exist}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Build Converge assets and copy them to the public directory';

    /**
     * The path to the Converge package directory.
     *
     * @var string
     */
    protected $packagePath;

    /**
     * The path to the Laravel project's public directory.
     *
     * @var string
     */
    protected $publicPath;

    /**
     * File watcher process.
     *
     * @var SymfonyProcess|null
     */
    protected $fileWatcher;

    /**
     * NPM watcher process.
     *
     * @var SymfonyProcess|null
     */
    protected $npmWatcher;

    /**
     * Initialize the command.
     */
    public function __construct()
    {
        parent::__construct();

        $this->packagePath = base_path('vendor/convergephp/converge');
        $this->publicPath = public_path('converge');
    }

    /**
     * Execute the console command.
     */
    public function handle(): int
    {
        if (! $this->validatePackageInstallation()) {
            return Command::FAILURE;
        }

        // this display converge
        $this->line('');
        $this->line('<fg=cyan> ██████╗ ██████╗ ███╗   ██╗██╗   ██╗███████╗██████╗  ██████╗ ███████╗</>');
        $this->line('<fg=cyan>██╔════╝██╔═══██╗████╗  ██║██║   ██║██╔════╝██╔══██╗██╔════╝ ██╔════╝</>');
        $this->line('<fg=cyan>██║     ██║   ██║██╔██╗ ██║██║   ██║█████╗  ██████╔╝██║  ███╗█████╗  </>');
        $this->line('<fg=cyan>╚██████╗╚██████╔╝██║ ╚████║ ╚████╔╝ ███████╗██║  ██║╚██████╔╝███████╗</>');
        $this->line('<fg=cyan> ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝  ╚═══╝  ╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝</>');
        $this->line('');

        $this->line('');

        $this->info('🤖 Building Converge assets...');

        try {
            // Create public directory if it doesn't exist
            $this->ensurePublicDirectoryExists();

            // Install npm dependencies if needed
            if (! $this->checkNodeModules()) {
                $this->installNodeDependencies();
            }

            // Handle watch mode  ==> php artisan converge:build --watch
            if ($this->option('watch')) {
                return $this->handleWatchMode();
            }

            // Normal Build assets (non-watch mode) ==> php artisan converge:build
            $this->buildAssets();

            // Copy built assets to public directory
            $this->copyAssetsToPublic();

            $this->displaySuccessMessage();

            return Command::SUCCESS;

        } catch (Exception $e) {
            $this->components->error('Build failed: '.$e->getMessage());

            return Command::FAILURE;
        }
    }

    /**
     * Handle shutdown signal.
     */
    public function handleShutdown(): void
    {
        $this->info('Shutting down watchers...');
        $this->cleanup();
        exit(0);
    }

    /**
     * Handle watch mode with ==> php artisan converge:build --watch .
     */
    protected function handleWatchMode(): int
    {
        $this->info('🤖 Starting watch mode...');
        $this->newLine();

        // Ensure file watcher script exists
        if (! $this->ensureFileWatcherExists()) {
            return Command::FAILURE;
        }

        // Initial build
        try {
            $this->buildAssets();
            $this->copyAssetsToPublic();
            $this->info('✓ Initial build completed');
            $this->newLine();
        } catch (Exception $e) {
            $this->components->error('🚨 Initial build failed: '.$e->getMessage());

            return Command::FAILURE;
        }

        // Display what we're watching
        $this->displayWatchInfo();

        // Setup signal handlers for graceful shutdown
        $this->setupSignalHandlers();

        try {
            // Start both watchers concurrently
            $this->startFileWatcher();
            $this->startNpmWatcher();

            // Main watch loop
            return $this->runWatchLoop();

        } catch (Exception $e) {
            $this->error('Watch mode failed: '.$e->getMessage());

            return Command::FAILURE;
        } finally {
            $this->cleanup();
        }
    }

    /**
     * Start the file watcher.
     */
    protected function startFileWatcher(): void
    {
        $watchPaths = $this->getWatchPaths();

        if (empty($watchPaths)) {
            $this->warn('No valid watch paths found. File watcher will not start.');

            return;
        }

        $nodePath = (new ExecutableFinder)->find('node');
        if (! $nodePath) {
            throw new RuntimeException('Node.js not found. Please install Node.js to use watch mode.');
        }

        $watcherScript = $this->packagePath.'/bin/file-watcher.cjs';

        $this->fileWatcher = new SymfonyProcess([
            $nodePath,
            $watcherScript,
            json_encode($watchPaths),
            $this->option('poll'),
        ], $this->packagePath, $this->getWatchEnvironment(), null, null);

        $this->fileWatcher->start();

        $this->line('→ Converge Watcher Started');
    }

    /**
     * Start the NPM asset watcher.
     */
    protected function startNpmWatcher(): void
    {
        $command = $this->getWatchCommand();

        $this->npmWatcher = Process::path($this->packagePath)
            ->timeout(0)
            ->env($this->getWatchEnvironment())
            ->start($command);

        $this->line("→ NPM asset watcher started: <fg=yellow>{$command}</>");
    }

    /**
     * Run the main watch loop.
     */
    protected function runWatchLoop(): int
    {
        $lastRebuild = 0;
        $debounceDelay = 1; // 1 second debounce

        while (true) {
            $currentTime = time();

            // Check file watcher output
            if ($this->fileWatcher && $this->fileWatcher->isRunning()) {
                $output = $this->fileWatcher->getIncrementalOutput();
                if (! empty(trim($output))) {
                    $this->handleFileWatcherOutput($output, $currentTime, $lastRebuild, $debounceDelay);
                    $lastRebuild = $currentTime;
                }

                $errorOutput = $this->fileWatcher->getIncrementalErrorOutput();
                if (! empty(trim($errorOutput)) && ! $this->isIgnorableError($errorOutput)) {
                    $this->error('File watcher error: '.trim($errorOutput));
                }
            }

            // Check NPM watcher output
            if ($this->npmWatcher && $this->npmWatcher->running()) {
                $output = $this->npmWatcher->latestOutput();
                $errorOutput = $this->npmWatcher->latestErrorOutput();

                if (! empty(trim($output))) {
                    $this->handleNpmWatcherOutput($output);
                }

                if (! empty(trim($errorOutput)) && ! $this->isIgnorableError($errorOutput)) {
                    $this->error('NPM watcher error: '.trim($errorOutput));
                }
            }

            // Check if processes are still running
            if (! $this->areWatchersRunning()) {
                $this->info('All watchers have stopped.');
                break;
            }

            // Short sleep to prevent excessive CPU usage
            usleep(100000); // 0.1 seconds
        }

        return Command::SUCCESS;
    }

    /**
     * Handle file watcher output (Laravel view changes).
     */
    protected function handleFileWatcherOutput(string $output, int $currentTime, int $lastRebuild, int $debounceDelay): void
    {
        if ($currentTime - $lastRebuild < $debounceDelay) {
            return; // Debounce rapid changes
        }

        $this->newLine();
        $this->line('<fg=cyan>→ Laravel view files changed</fg=cyan>');

        try {
            $this->buildAssets();
            $this->copyAssetsToPublic();
            $this->line('<fg=green>✓ Assets rebuilt successfully</fg=green>');
        } catch (Exception $e) {
            $this->error('Rebuild failed: '.$e->getMessage());
        }

        $this->newLine();
    }

    /**
     * Handle NPM watcher output (asset changes).
     */
    protected function handleNpmWatcherOutput(string $output): void
    {
        $this->line($output);

        // Check for build completion indicators
        $buildIndicators = [
            'compiled successfully', 'webpack compiled', 'build completed',
            'bundled successfully', 'compiled with', 'built at', '✓ built',
            'Build completed', 'rebuild', 'updated',
        ];

        $outputLower = mb_strtolower($output);
        foreach ($buildIndicators as $indicator) {
            if (mb_strpos($outputLower, mb_strtolower($indicator)) !== false) {
                $this->copyAssetsToPublic();
                $this->line('<fg=green>→ Assets copied to public directory</fg=green>');
                break;
            }
        }
    }

    /**
     * Check if watchers are still running.
     */
    protected function areWatchersRunning(): bool
    {
        $fileWatcherRunning = $this->fileWatcher ? $this->fileWatcher->isRunning() : false;
        $npmWatcherRunning = $this->npmWatcher ? $this->npmWatcher->running() : false;

        return $fileWatcherRunning || $npmWatcherRunning;
    }

    /**
     * Get paths to watch for changes.
     */
    protected function getWatchPaths(): array
    {
        $basePath = base_path();
        $paths = [];

        // Default Laravel paths that should trigger rebuilds
        $defaultPaths = [
            'resources/views',
            'resources/js',
            'resources/css',
        ];

        // Add config-based paths if available
        // $configPaths = config('converge.watch', []);
        $configPaths = [];
        $allPaths = array_merge($defaultPaths, $configPaths);

        foreach ($allPaths as $path) {
            $fullPath = $basePath.'/'.ltrim($path, '/');
            if (File::exists($fullPath)) {
                $paths[] = $fullPath;
            }
        }

        return $paths;
    }

    /**
     * Get environment variables for watch processes.
     */
    protected function getWatchEnvironment(): array
    {
        return array_merge($_ENV, [
            'CHOKIDAR_IGNORED' => '**/node_modules/**,**/.git/**,**/vendor/**,**/storage/logs/**,**/bootstrap/cache/**',
            'CHOKIDAR_USEPOLLING' => 'false',
            'CHOKIDAR_INTERVAL' => $this->option('poll'),
            'NODE_ENV' => $this->option('dev') ? 'development' : 'production',
        ]);
    }

    /**
     * Ensure the file watcher script exists.
     */
    protected function ensureFileWatcherExists(): bool
    {
        $watcherScript = $this->packagePath.'/bin/file-watcher.cjs';

        if (! File::exists($watcherScript)) {
            $this->createFileWatcherScript($watcherScript);
        }

        return File::exists($watcherScript);
    }

    /**
     * Create the file watcher script.
     */
    protected function createFileWatcherScript(string $path): void
    {
        $binDir = dirname($path);
        if (! File::exists($binDir)) {
            File::makeDirectory($binDir, 0755, true);
        }

        $script = $this->getFileWatcherScriptContent();
        File::put($path, $script);
        chmod($path, 0755);

        $this->line("Created file watcher script: <fg=yellow>{$path}</>");
    }

    /**
     * Get the file watcher script content.
     */
    protected function getFileWatcherScriptContent(): string
    {
        return <<<'JS'
#!/usr/bin/env node

const chokidar = require('chokidar');
const path = require('path');

// Get watch paths from command line arguments
const watchPaths = JSON.parse(process.argv[2] || '[]');
const pollInterval = parseInt(process.argv[3] || '1000');

if (watchPaths.length === 0) {
    console.error('No paths to watch provided');
    process.exit(1);
}

console.log('Starting file watcher...');
console.log('Watching paths:', watchPaths);

// Initialize watcher
const watcher = chokidar.watch(watchPaths, {
    ignored: [
        '**/node_modules/**',
        '**/.git/**',
        '**/vendor/**',
        '**/storage/logs/**',
        '**/bootstrap/cache/**',
        '**/.DS_Store',
        '**/Thumbs.db'
    ],
    persistent: true,
    usePolling: process.env.CHOKIDAR_USEPOLLING === 'true',
    interval: pollInterval,
    ignoreInitial: true,
    followSymlinks: false,
    depth: 10
});

// Handle file changes
watcher
    .on('change', (filePath) => {
        if (filePath.endsWith('.blade.php') || filePath.endsWith('.js') || filePath.endsWith('.css') || filePath.endsWith('.scss') || filePath.endsWith('.sass')) {
            console.log(`File changed: ${path.relative(process.cwd(), filePath)}`);
        }
    })
    .on('add', (filePath) => {
        if (filePath.endsWith('.blade.php') || filePath.endsWith('.js') || filePath.endsWith('.css') || filePath.endsWith('.scss') || filePath.endsWith('.sass')) {
            console.log(`File added: ${path.relative(process.cwd(), filePath)}`);
        }
    })
    .on('unlink', (filePath) => {
        if (filePath.endsWith('.blade.php') || filePath.endsWith('.js') || filePath.endsWith('.css') || filePath.endsWith('.scss') || filePath.endsWith('.sass')) {
            console.log(`File removed: ${path.relative(process.cwd(), filePath)}`);
        }
    })
    .on('error', (error) => {
        console.error('Watcher error:', error);
    })
    .on('ready', () => {
        console.log('File watcher ready and watching for changes...');
    });

// Handle process termination
process.on('SIGINT', () => {
    console.log('Stopping file watcher...');
    watcher.close().then(() => {
        process.exit(0);
    });
});

process.on('SIGTERM', () => {
    console.log('Stopping file watcher...');
    watcher.close().then(() => {
        process.exit(0);
    });
});
JS;
    }

    /**
     * Setup signal handlers for graceful shutdown.
     */
    protected function setupSignalHandlers(): void
    {
        if (function_exists('pcntl_signal')) {
            pcntl_signal(SIGINT, [$this, 'handleShutdown']);
            pcntl_signal(SIGTERM, [$this, 'handleShutdown']);
        }
    }

    /**
     * Cleanup running processes.
     */
    protected function cleanup(): void
    {
        if ($this->fileWatcher && $this->fileWatcher->isRunning()) {
            $this->fileWatcher->stop();
        }

        if ($this->npmWatcher && $this->npmWatcher->running()) {
            $this->npmWatcher->stop();
        }
    }

    /**
     * Display watch information.
     */
    protected function displayWatchInfo(): void
    {
        $watchPaths = $this->getWatchPaths();

        if (! empty($watchPaths)) {
            $this->line('<fg=cyan>Watching this directories changes 👇 :</fg=cyan>');
            foreach ($watchPaths as $path) {
                $relativePath = str_replace(base_path().'/', '', $path);
                $this->line("  → <fg=yellow>{$relativePath}</fg=yellow>");
            }
            $this->newLine();
        }

        $this->line('<fg=cyan>File types monitored:</fg=cyan>');
        $this->line('  → .blade.php (Laravel views)');
        $this->line('  → .js, .css, .scss, .sass (Asset files)');
        $this->newLine();

        $this->line('<fg=green>Press Ctrl+C to stop watching...</fg=green>');
        $this->newLine();
    }

    /**
     * Display success message.
     */
    protected function displaySuccessMessage(): void
    {
        $this->components->info('Converge assets built successfully!');
        $this->newLine();
        $this->line('Assets available at:');
        $this->line("  CSS: <fg=green>{$this->publicPath}/css/converge.css</>");
        $this->line("  JS:  <fg=green>{$this->publicPath}/js/converge.js</>");
    }

    /**
     * Determine the appropriate watch command to use.
     */
    protected function getWatchCommand(): string
    {
        $packageJsonPath = $this->packagePath.'/package.json';

        if (File::exists($packageJsonPath)) {
            $packageData = json_decode(File::get($packageJsonPath), true);
            $scripts = $packageData['scripts'] ?? [];

            // Priority order for watch scripts
            $watchScripts = ['watch', 'dev:watch', 'dev'];

            foreach ($watchScripts as $script) {
                if (isset($scripts[$script])) {
                    return "npm run {$script}";
                }
            }
        }

        // Fallback to generic watch command
        return 'npm run dev -- --watch';
    }

    /**
     * Check if an error message should be ignored (common warnings).
     */
    protected function isIgnorableError(string $output): bool
    {
        $ignorablePatterns = [
            'warning',
            'deprecated',
            'suggestion',
            'recommendation',
            'info',
            'no space left on device',
            'inotify_add_watch',
            'enospc',
            'chokidar',
        ];

        $outputLower = mb_strtolower($output);

        foreach ($ignorablePatterns as $pattern) {
            if (mb_strpos($outputLower, $pattern) !== false) {
                return true;
            }
        }

        return false;
    }

    /**
     * Validate that the Converge package is properly installed.
     */
    protected function validatePackageInstallation(): bool
    {
        if (! File::exists($this->packagePath)) {
            $this->components->error('Converge package not found. Please install it via Composer.');

            return false;
        }

        $requiredFiles = [
            'package.json',
            'resources/css/app.css',
            'resources/js/app.js',
        ];

        foreach ($requiredFiles as $file) {
            if (! File::exists($this->packagePath.'/'.$file)) {
                $this->components->error("Required file not found: {$file}");

                return false;
            }
        }

        return true;
    }

    /**
     * Ensure the public directory exists.
     */
    protected function ensurePublicDirectoryExists(): void
    {
        if (! File::exists($this->publicPath)) {
            File::makeDirectory($this->publicPath, 0755, true);
            $this->line("Created directory: <fg=yellow>{$this->publicPath}</>");
        }

        // Create subdirectories
        $subdirs = ['css', 'js'];
        foreach ($subdirs as $dir) {
            $path = $this->publicPath.'/'.$dir;
            if (! File::exists($path)) {
                File::makeDirectory($path, 0755, true);
            }
        }
    }

    /**
     * Check if node_modules exists in the package directory.
     */
    protected function checkNodeModules(): bool
    {
        return File::exists($this->packagePath.'/node_modules');
    }

    /**
     * Install npm dependencies.
     */
    protected function installNodeDependencies(): void
    {
        $this->info('Installing npm dependencies...');

        $result = Process::path($this->packagePath)
            ->timeout(300) // 5 minutes timeout
            ->run('npm install');

        if ($result->failed()) {
            throw new RuntimeException('Failed to install npm dependencies: '.$result->errorOutput());
        }

        $this->line('Dependencies installed successfully.');
    }

    /**
     * Build the assets using npm scripts.
     */
    protected function buildAssets(): void
    {
        $isDev = $this->option('dev');
        $command = $isDev ? 'npm run dev' : 'npm run build';

        $this->line("Running: <fg=yellow>{$command}</>");

        $result = Process::path($this->packagePath)
            ->timeout(120)
            ->env($this->getWatchEnvironment())
            ->run($command);

        if ($result->failed()) {
            throw new RuntimeException('Asset build failed: '.$result->errorOutput());
        }

        $this->line('Assets built successfully.');
    }

    /**
     * Copy built assets to the public directory.
     */
    protected function copyAssetsToPublic(): void
    {
        // Skip prompts in watch mode
        $isWatchMode = $this->option('watch');

        if (! $isWatchMode) {
            $this->info('Copying assets to public directory...');
        }

        // Define source and destination mappings
        $assetMappings = [
            'dist/css/converge.css' => 'css/converge.css',
            'dist/js/converge.js' => 'js/converge.js',
        ];

        foreach ($assetMappings as $source => $destination) {
            $sourcePath = $this->packagePath.'/'.$source;
            $destPath = $this->publicPath.'/'.$destination;

            if (! File::exists($sourcePath)) {
                if (! $isWatchMode) {
                    $this->warn("Source file not found: {$sourcePath}");
                }

                continue;
            }

            // In watch mode or with --force, skip confirmation
            if (! $isWatchMode && File::exists($destPath) && ! $this->option('force')) {
                if (! $this->confirm("File {$destination} already exists. Overwrite?", true)) {
                    continue;
                }
            }

            File::copy($sourcePath, $destPath);
            if (! $isWatchMode) {
                $this->line("Copied: <fg=green>{$destination}</>");
            }
        }

        // Copy any additional assets if they exist (images, fonts, etc.)
        $this->copyAdditionalAssets($isWatchMode);
    }

    /**
     * Copy additional assets like images, fonts, etc.
     */
    protected function copyAdditionalAssets(bool $isWatchMode = false): void
    {
        $additionalDirs = ['images', 'fonts', 'icons'];

        foreach ($additionalDirs as $dir) {
            $sourcePath = $this->packagePath.'/dist/'.$dir;
            $destPath = $this->publicPath.'/'.$dir;

            if (File::exists($sourcePath)) {
                if (! $isWatchMode && File::exists($destPath) && ! $this->option('force')) {
                    if (! $this->confirm("Directory {$dir} already exists. Overwrite?", true)) {
                        continue;
                    }
                    File::deleteDirectory($destPath);
                }

                if (File::exists($destPath) && ($isWatchMode || $this->option('force'))) {
                    File::deleteDirectory($destPath);
                }

                File::copyDirectory($sourcePath, $destPath);
                if (! $isWatchMode) {
                    $this->line("Copied directory: <fg=green>{$dir}/</>");
                }
            }
        }
    }
}
