<?php

namespace Fluxtor\Converge\Commands;

use function Laravel\Prompts\confirm;

use Illuminate\Support\ServiceProvider;
use Illuminate\Console\GeneratorCommand;

class ModuleMakeCommand extends GeneratorCommand
{

    /**
     * The console command name.
     *
     * @var string
     */
    protected $name = 'converge:make-module ';

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
            $this->components->error('The name "'.$this->getNameInput().'" is reserved by PHP.');

            return false;
        }
        dd($this->getNameInput());
        $id =  $this->getNameInput();
        $moduleClass=$this->constructClass($id);
        $result = parent::handle();
        // dd($result);
        if ($result === false) {
            return $result;
        }

        ServiceProvider::addProviderToBootstrapFile(
            $this->qualifyClass($this->getNameInput()),
            $this->laravel->getBootstrapProvidersPath(),
        );

        return $result;
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
        return $rootNamespace.'\Providers\Converge';
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
            if (PHP_OS_FAMILY === 'Windows') {
                exec('start https://github.com/convergephp/converge');
            }

            $this->components->info('Thank you!');
        }
    }
}
