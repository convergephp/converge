<?php

namespace Fluxtor\Converge\Commands;

use Illuminate\Support\Str;

use function Laravel\Prompts\confirm;
use Illuminate\Support\ServiceProvider;
use Illuminate\Console\GeneratorCommand;
use Illuminate\Contracts\Console\PromptsForMissingInput;

class ModuleMakeCommand extends GeneratorCommand
{

    /**
     * The console command name.
     *
     * @var string
     */
    // protected $name = 'converge:make-module {--id=} {--route-path=} {--path= }';
    protected $signature = 'converge:make-module {name}  {--id=} {--route-url=} {--path=}';

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
        if ($this->isReservedName($this->getNameInput())) {
            $this->components->error('The name "' . $this->getNameInput() . '" is reserved by PHP.');
            return false;
        }

        // dd($this->getNameInput());

        $moduleName = $this->getNameInput();

        $options = $this->options();


        $moduleClass = $this->constructClass($moduleName);

        $path = $this->getPath($moduleClass);

        $this->makeDirectory($path);

        dd($this->buildClassFile($moduleClass, $options));

        $this->files->put($path, $this->sortImports($this->buildClassFile($moduleClass, $options)));

        $info = $this->type;

        if (windows_os()) {
            $path = str_replace('/', '\\', $path);
        }

        $this->components->info(sprintf('%s [%s] created successfully.', $info, $path));


        ServiceProvider::addProviderToBootstrapFile(
            $this->qualifyClass($this->getNameInput()),
            $this->laravel->getBootstrapProvidersPath(),
        );
    }

    public function constructClass($inputModuleName)
    {
        return $this->qualifyClass(Str::ucfirst(Str::camel($inputModuleName)));
    }

    protected function buildClassFile($name, $options)
    {
        $stub = $this->files->get($this->getStub());

        $this->replaceNamespace($stub, $name)->replaceClass($stub, $name);

        $this->replaceId($stub, $options['id'] ?? '');

        $this->replacePath($stub, $options['path'] ?? '');

        $this->replaceRoutePath($stub, $options['route-url'] ?? '');

        return $stub;
    }

    public function replacePath(&$stub, $path)
    {
        $stub = str_replace(['{{ path }}', '{{path}}'], $path, $stub);
    }
    public function replaceId(&$stub, $path)
    {
        $stub = str_replace(['{{ id }}', '{{id}}'], $path, $stub);
    }
    public function replaceRoutePath(&$stub, $path)
    {
        $stub = str_replace(['{{ route }}', '{{route}}'], $path, $stub);
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
            : __DIR__ . $stub;
    }

    protected function getDefaultNamespace($rootNamespace)
    {
        return $rootNamespace . '\Providers\Converge';
    }

    protected function askToStar(): void
    {
        if ($this->option('no-interaction')) {
            return;
        }

        if (confirm(
            label: 'All done! Would you like to show some love by starring the Filament repo on GitHub?',
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
