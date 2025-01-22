<?php

namespace Fluxtor\Converge\Commands;

use Illuminate\Console\GeneratorCommand;

class ModuleMakeCommand extends GeneratorCommand {

        /**
     * The console command name.
     *
     * @var string
     */
    protected $name = 'converge:make-module';

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
    protected $type = 'Provider';

    public function handle(){
        dd(file_get_contents($this->getStub()));
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
}
