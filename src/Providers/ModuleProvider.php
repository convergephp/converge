<?php

namespace Fluxtor\Converge\Providers;

use ModuleRegistry;
use Fluxtor\Converge\Module;
use Illuminate\Support\ServiceProvider;

abstract class ModuleProvider extends ServiceProvider
{
    abstract public function module(Module $module): Module;
    public function register()
    {
        $this->app->make(ModuleRegistry::class);   
    }
}
