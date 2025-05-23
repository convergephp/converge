<?php

declare(strict_types=1);

namespace Converge\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Process;
use Symfony\Component\Process\Exception\ProcessFailedException;
use Symfony\Component\Process\Process as SymfonyProcess;

class ConvergeBuildCommand extends Command
{
    /**
     * The console command name.
     *
     * @var string
     */
    protected $signature = 'converge:build {--dev : Build in development mode}
                                          {--watch : Watch for changes and rebuild automatically}
                                          {--force : Force rebuild even if files exist}';

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

        $this->info('Building Converge assets...');

        try {
            // Create public directory if it doesn't exist
            $this->ensurePublicDirectoryExists();

            // Install npm dependencies if needed
            if (! $this->checkNodeModules()) {
                $this->installNodeDependencies();
            }

            // Handle watch mode differently
            if ($this->option('watch')) {
                return $this->runWatchMode();
            }

            // Build assets
            $this->buildAssets();

            // Copy built assets to public directory
            $this->copyAssetsToPublic();

            $this->displaySuccessMessage();

            return Command::SUCCESS;

        } catch (\Exception $e) {
            $this->components->error('Build failed: '.$e->getMessage());
            return Command::FAILURE;
        }
    }

    /**
     * Run the build process in watch mode.
     */
    protected function runWatchMode(): int
    {
        $this->info('Starting watch mode...');
        $this->line('Press <fg=red>Ctrl+C</> to stop watching.');
        $this->newLine();

        // First, do an initial build
        try {
            $this->buildAssets(false); // Don't use watch for initial build
            $this->copyAssetsToPublic();
            $this->line('Initial build completed.');
        } catch (\Exception $e) {
            $this->warn('Initial build failed: '.$e->getMessage());
        }

        // Create the watch process
        $process = new SymfonyProcess(
            ['npm', 'run', 'watch'], // Assuming you have a watch script
            $this->packagePath,
            null,
            null,
            null // No timeout for watch mode
        );

        // Alternative commands to try if 'npm run watch' doesn't exist
        $watchCommands = [
            ['npm', 'run', 'watch'],
            ['npm', 'run', 'dev', '--', '--watch'],
            ['npx', 'webpack', '--watch'],
            ['npx', 'vite', 'build', '--watch']
        ];

        $watchProcess = null;
        foreach ($watchCommands as $cmd) {
            $testProcess = new SymfonyProcess($cmd, $this->packagePath);
            $testProcess->setTimeout(5);

            try {
                $testProcess->start();
                $testProcess->wait();

                if ($testProcess->getExitCode() === 0 ||
                    strpos($testProcess->getOutput().$testProcess->getErrorOutput(), 'watch') !== false) {
                    $watchProcess = new SymfonyProcess($cmd, $this->packagePath);
                    break;
                }
            } catch (\Exception $e) {
                continue;
            }
        }

        if (! $watchProcess) {
            $this->components->error('No suitable watch command found. Please ensure your package.json has a "watch" script or install a build tool that supports watching.');
            return Command::FAILURE;
        }

        // Start the watch process
        $watchProcess->start();

        // Setup signal handlers for graceful shutdown
        if (function_exists('pcntl_signal')) {
            pcntl_signal(SIGINT, function () use ($watchProcess) {
                $this->info('Stopping watch mode...');
                $watchProcess->stop();
                exit(0);
            });
        }

        $lastCopyTime = 0;
        $copyInterval = 2; // Copy assets every 2 seconds if files changed

        // Monitor the process and copy assets when they change
        while ($watchProcess->isRunning()) {
            usleep(500000); // Sleep for 0.5 seconds

            // Check if we should copy assets (every few seconds)
            if (time() - $lastCopyTime >= $copyInterval) {
                try {
                    $this->copyAssetsToPublic();
                    $lastCopyTime = time();
                } catch (\Exception $e) {
                    // Silently continue if copy fails
                }
            }

            // Output any new output from the process
            if ($output = $watchProcess->getIncrementalOutput()) {
                $this->line($output);
            }

            if ($errorOutput = $watchProcess->getIncrementalErrorOutput()) {
                $this->line('<fg=yellow>'.$errorOutput.'</>');
            }

            // Handle signals if available
            if (function_exists('pcntl_signal_dispatch')) {
                pcntl_signal_dispatch();
            }
        }

        $exitCode = $watchProcess->getExitCode();

        if ($exitCode !== 0) {
            $this->components->error('Watch process exited with error code: '.$exitCode);
            return Command::FAILURE;
        }

        return Command::SUCCESS;
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
            throw new \RuntimeException('Failed to install npm dependencies: '.$result->errorOutput());
        }

        $this->line('Dependencies installed successfully.');
    }

    /**
     * Build the assets using npm scripts.
     */
    protected function buildAssets(bool $useWatchFlag = null): void
    {
        $isDev = $this->option('dev');
        $isWatch = $useWatchFlag ?? $this->option('watch');

        if ($isWatch && ! $isDev) {
            $this->warn('Watch mode requires development mode. Enabling --dev flag.');
            $isDev = true;
        }

        // Don't use watch flag in this method when called from watch mode
        if ($useWatchFlag === false) {
            $isWatch = false;
        }

        $command = $isDev ? 'npm run dev' : 'npm run build';

        $this->line("Running: <fg=yellow>{$command}</>");

        $timeout = $isWatch ? null : 120; // No timeout for watch, 2 minutes for normal build

        $result = Process::path($this->packagePath)
            ->timeout($timeout)
            ->run($command);

        if ($result->failed()) {
            throw new \RuntimeException('Asset build failed: '.$result->errorOutput());
        }

        if (! $isWatch) {
            $this->line('Assets built successfully.');
        }
    }

    /**
     * Copy built assets to the public directory.
     */
    protected function copyAssetsToPublic(): void
    {
        // Define source and destination mappings
        $assetMappings = [
            'dist/css/converge.css' => 'css/converge.css',
            'dist/js/converge.js' => 'js/converge.js',
        ];

        $copiedFiles = 0;

        foreach ($assetMappings as $source => $destination) {
            $sourcePath = $this->packagePath.'/'.$source;
            $destPath = $this->publicPath.'/'.$destination;

            if (! File::exists($sourcePath)) {
                continue;
            }

            // Check if destination exists and --force is not used
            if (File::exists($destPath) && ! $this->option('force')) {
                // In watch mode, always copy if source is newer
                if ($this->option('watch')) {
                    if (File::lastModified($sourcePath) <= File::lastModified($destPath)) {
                        continue;
                    }
                } else {
                    if (! $this->confirm("File {$destination} already exists. Overwrite?", true)) {
                        continue;
                    }
                }
            }

            File::copy($sourcePath, $destPath);

            if (! $this->option('watch')) {
                $this->line("Copied: <fg=green>{$destination}</>");
            }
            $copiedFiles++;
        }

        // Copy any additional assets if they exist (images, fonts, etc.)
        $copiedFiles += $this->copyAdditionalAssets();

        // Only show message if in watch mode and files were actually copied
        if ($this->option('watch') && $copiedFiles > 0) {
            $this->line("Updated {$copiedFiles} asset file(s) at ".date('H:i:s'));
        }
    }

    /**
     * Copy additional assets like images, fonts, etc.
     */
    protected function copyAdditionalAssets(): int
    {
        $additionalDirs = ['images', 'fonts', 'icons'];
        $copiedDirs = 0;

        foreach ($additionalDirs as $dir) {
            $sourcePath = $this->packagePath.'/dist/'.$dir;
            $destPath = $this->publicPath.'/'.$dir;

            if (File::exists($sourcePath)) {
                if (File::exists($destPath) && ! $this->option('force')) {
                    if (! $this->option('watch') && ! $this->confirm("Directory {$dir} already exists. Overwrite?", true)) {
                        continue;
                    }
                    File::deleteDirectory($destPath);
                }

                File::copyDirectory($sourcePath, $destPath);

                if (! $this->option('watch')) {
                    $this->line("Copied directory: <fg=green>{$dir}/</>");
                }
                $copiedDirs++;
            }
        }

        return $copiedDirs;
    }

    /**
     * Display success message with build information.
     */
    protected function displaySuccessMessage(): void
    {
        $this->components->info('Converge assets built successfully!');
        $this->newLine();
        $this->line('Assets available at:');
        $this->line("  CSS: <fg=green>{$this->publicPath}/css/converge.css</>");
        $this->line("  JS:  <fg=green>{$this->publicPath}/js/converge.js</>");

        // Display build info
        $buildInfo = $this->getBuildInfo();
        if (! empty($buildInfo)) {
            $this->newLine();
            $this->line('Build Information:');

            if (isset($buildInfo['version'])) {
                $this->line("  Version: <fg=cyan>{$buildInfo['version']}</>");
            }

            if (isset($buildInfo['css_size'])) {
                $this->line("  CSS size: <fg=cyan>{$buildInfo['css_size']}</>");
            }

            if (isset($buildInfo['js_size'])) {
                $this->line("  JS size: <fg=cyan>{$buildInfo['js_size']}</>");
            }
        }
    }

    /**
     * Get the build information for display.
     */
    protected function getBuildInfo(): array
    {
        $info = [];

        // Get package.json info
        $packageJsonPath = $this->packagePath.'/package.json';
        if (File::exists($packageJsonPath)) {
            $packageData = json_decode(File::get($packageJsonPath), true);
            $info['version'] = $packageData['version'] ?? 'unknown';
            $info['name'] = $packageData['name'] ?? 'converge';
        }

        // Get file sizes
        $cssPath = $this->publicPath.'/css/converge.css';
        $jsPath = $this->publicPath.'/js/converge.js';

        if (File::exists($cssPath)) {
            $info['css_size'] = $this->formatBytes(File::size($cssPath));
        }

        if (File::exists($jsPath)) {
            $info['js_size'] = $this->formatBytes(File::size($jsPath));
        }

        return $info;
    }

    /**
     * Format bytes to human readable format.
     */
    protected function formatBytes(int $bytes, int $precision = 2): string
    {
        $units = ['B', 'KB', 'MB', 'GB'];

        for ($i = 0; $bytes > 1024 && $i < count($units) - 1; $i++) {
            $bytes /= 1024;
        }

        return round($bytes, $precision).' '.$units[$i];
    }
}
