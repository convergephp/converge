<?php

declare(strict_types=1);

namespace Converge\Commands;

use Illuminate\Console\GeneratorCommand;
use Illuminate\Support\Facades\File;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Str;

use function Laravel\Prompts\confirm;

class ModuleMakeCommand extends GeneratorCommand
{
    /**
     * The console command name.
     *
     * @var string
     */
    protected $signature = 'converge:make-module 
                {name         : The name of the module you want to create.}
                {--id=        : The unique identifier for the module.}
                {--route=docs : The base route associated with the module.}
                {--path=      : The filesystem path associated with the module.}
                {--force      : Forces the module creation even if a module with the same name already exists.}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new module service provider class';

    /**
     * The type of class being generated.
     *
     * @var string
     */
    protected $type = 'Module';

    /**
     * Execute the console command.
     *
     * @return bool|null
     *
     * @throws \Illuminate\Contracts\Filesystem\FileNotFoundException
     */
    public function handle()
    {
        if (! File::exists(app_path('Providers/Converge')) || count(File::files(app_path('Providers/Converge'))) === 0) {
            $this->line('');
            $this->line('<fg=cyan> ██████╗ ██████╗ ███╗   ██╗██╗   ██╗███████╗██████╗  ██████╗ ███████╗</>');
            $this->line('<fg=cyan>██╔════╝██╔═══██╗████╗  ██║██║   ██║██╔════╝██╔══██╗██╔════╝ ██╔════╝</>');
            $this->line('<fg=cyan>██║     ██║   ██║██╔██╗ ██║██║   ██║█████╗  ██████╔╝██║  ███╗█████╗  </>');
            $this->line('<fg=cyan>╚██████╗╚██████╔╝██║ ╚████║ ╚████╔╝ ███████╗██║  ██║╚██████╔╝███████╗</>');
            $this->line('<fg=cyan> ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝  ╚═══╝  ╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝</>');
            $this->line('');
        }

        $moduleName = $this->getNameInput();

        if ($this->isReservedName($moduleName)) {
            $this->components->error("The name $moduleName is reserved by PHP.");

            return false;
        }

        $options = $this->options();

        $moduleClass = $this->constructClass($moduleName);

        if (! $this->option('force') && $this->alreadyExists($moduleClass)) {
            $this->components->error($this->type.' already exists.');

            return false;
        }

        $path = $this->getPath($moduleClass);

        $this->makeDirectory($path);

        $this->files->put($path, $this->sortImports($this->buildClassFile($moduleClass, $options)));

        $info = $this->type;

        if (windows_os()) {
            $path = str_replace('/', '\\', $path);
        }

        $absolutePath = realpath($path);
        $relativePath = str_replace(base_path().'/', '', $absolutePath);

        $this->line(sprintf(
            '<fg=yellow>⚡️</> <fg=green>%s</><href=file://%s><fg=cyan>[%s]</></> <fg=green>created successfully.</>',
            $info,
            $absolutePath,
            $relativePath
        ));

        ServiceProvider::addProviderToBootstrapFile(
            $this->qualifyClass($this->constructClass($moduleName)),
            $this->laravel->getBootstrapProvidersPath(),
        );

        if (rand(min: 0, max: 1) > 1 / 2) {
            $this->askToStar();
        }
    }

    public function constructClass($inputModuleName)
    {
        return $this->qualifyClass(Str::finish(Str::ucfirst(Str::camel($inputModuleName)), 'ModuleProvider'));
    }

    public function replacePath(&$stub, $path)
    {
        // support of path functions (eg. storage_path()...)
        if (preg_match('/^[a-zA-Z_0-9]+\(.*\)$/', $path)) {
            return $stub = str_replace(['{{ path }}', '{{path}}'], $path, $stub);
        }

        return $stub = str_replace(['{{ path }}', '{{path}}'], "'".$path."'", $stub);
    }

    public function replaceId(&$stub, $path)
    {
        return $stub = str_replace(['{{ id }}', '{{id}}'], $path, $stub);
    }

    public function replaceRoutePath(&$stub, $path)
    {
        return $stub = str_replace(['{{ route }}', '{{route}}'], $path, $stub);
    }

    protected function buildClassFile($name, $options)
    {
        $stub = $this->files->get($this->getStub());

        $stub = $this->replaceNamespace($stub, $name)->replaceClass($stub, $name);

        $id = $options['id'] ?? Str::lower(Str::before(class_basename($name), 'ModuleProvider'));

        $this->replaceId($stub, $id);

        $this->replacePath($stub, $options['path'] ?? "base_path('starterkit')");

        $this->replaceRoutePath($stub, $options['route'] ?? 'docs');

        return $stub;
    }

    protected function getStub()
    {
        return $this->resolveStubPath('/stubs/module.stub');
    }

    /**
     * Resolve the fully-qualified path to the stub.
     *
     * @param  string  $stub
     * @return string
     */
    protected function resolveStubPath($stub)
    {
        return file_exists($customPath = $this->laravel->basePath(trim($stub, '/')))
            ? $customPath
            : __DIR__.$stub;
    }

    protected function getDefaultNamespace($rootNamespace)
    {
        return $rootNamespace.'\Providers\Converge';
    }

    protected function askToStar(): void
    {
        if ($this->option('no-interaction')) {
            return;
        }

        if (confirm(
            label: 'Join our growing community! Would you like to star Converge on GitHub and show your support?',
            default: true,
        )) {
            if (PHP_OS_FAMILY === 'Darwin') {
                exec('open https://github.com/convergephp/converge');
            }
            if (PHP_OS_FAMILY === 'Linux') {
                exec('xdg-open https://github.com/convergephp/converge');
            }
            if (windows_os()) {
                exec('start https://github.com/convergephp/converge');
            }

            $this->components->info('Thank you!');
        }
    }
}
