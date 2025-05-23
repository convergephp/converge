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
                                          {--watch : Watch for changes}
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
                return $this->handleWatchMode();
            }

            // Build assets (non-watch mode)
            $this->buildAssets();

            // Copy built assets to public directory
            $this->copyAssetsToPublic();

            $this->components->info('Converge assets built successfully!');
            $this->newLine();
            $this->line('Assets available at:');
            $this->line("  CSS: <fg=green>{$this->publicPath}/css/converge.css</>");
            $this->line("  JS:  <fg=green>{$this->publicPath}/js/converge.js</>");

            return Command::SUCCESS;

        } catch (\Exception $e) {
            $this->components->error('Build failed: '.$e->getMessage());
            return Command::FAILURE;
        }
    }

    /**
     * Handle watch mode with persistent monitoring.
     */
    protected function handleWatchMode(): int
    {
        $this->info('Starting watch mode. Press Ctrl+C to stop...');
        $this->newLine();

        // Initial build
        try {
            $this->buildAssets();
            $this->copyAssetsToPublic();
            $this->line('Initial build completed. Watching for changes...');
            $this->newLine();
        } catch (\Exception $e) {
            $this->components->error('Initial build failed: '.$e->getMessage());
            return Command::FAILURE;
        }

        // Determine the watch command
        $command = $this->getWatchCommand();
        $this->line("Starting: <fg=yellow>{$command}</>");
        $this->newLine();

        // Track if we've seen any output to detect if the process is actually running
        $hasSeenOutput = false;
        $lastOutputTime = time();

        try {
            // Use Laravel's Process with real-time output callback
            $result = Process::path($this->packagePath)
                ->timeout(0) // No timeout for watch mode
                ->run($command, function (string $type, string $buffer) use (&$hasSeenOutput, &$lastOutputTime) {
                    $hasSeenOutput = true;
                    $lastOutputTime = time();

                    // Clean up the output
                    $output = trim($buffer);
                    if (empty($output)) {
                        return;
                    }

                    if ($type === SymfonyProcess::OUT) {
                        // Display the output
                        $this->line($output);

                        // Check for build completion indicators and copy assets
                        $buildIndicators = [
                            'compiled successfully',
                            'webpack compiled',
                            'build completed',
                            'bundled successfully',
                            'compiled with',
                            'built at',
                            '✓ built',
                            'Build completed'
                        ];

                        $outputLower = strtolower($output);
                        foreach ($buildIndicators as $indicator) {
                            if (strpos($outputLower, strtolower($indicator)) !== false) {
                                $this->copyAssetsToPublic();
                                $this->line('<fg=green>→ Assets copied to public directory</fg=green>');
                                break;
                            }
                        }
                    } elseif ($type === SymfonyProcess::ERR) {
                        // Show errors but don't stop the process (many are just warnings)
                        if (! $this->isIgnorableError($output)) {
                            $this->error($output);
                        }
                    }
                });

            // Check if the process ended normally or was interrupted
            if ($result->exitCode() === 0) {
                $this->info('Watch mode ended successfully.');
                return Command::SUCCESS;
            } elseif (in_array($result->exitCode(), [130, 143])) { // SIGINT, SIGTERM
                $this->info('Watch mode stopped by user.');
                return Command::SUCCESS;
            } else {
                $this->error('Watch process ended unexpectedly (exit code: '.$result->exitCode().')');
                if ($result->errorOutput()) {
                    $this->error('Error output: '.$result->errorOutput());
                }
                return Command::FAILURE;
            }

        } catch (\Exception $e) {
            $this->error('Watch mode failed: '.$e->getMessage());
            return Command::FAILURE;
        }
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
        ];

        $outputLower = strtolower($output);

        foreach ($ignorablePatterns as $pattern) {
            if (strpos($outputLower, $pattern) !== false) {
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
            throw new \RuntimeException('Failed to install npm dependencies: '.$result->errorOutput());
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
            ->run($command);

        if ($result->failed()) {
            throw new \RuntimeException('Asset build failed: '.$result->errorOutput());
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
