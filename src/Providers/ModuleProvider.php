<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Providers;

use Fluxtor\Converge\Module;
use Fluxtor\Converge\ModuleRegistry;
use Illuminate\Support\ServiceProvider;

abstract class ModuleProvider extends ServiceProvider
{
    abstract public function module(Module $module): Module;

    final public function register()
    {
        // register a module insance
        $this->app->make(ModuleRegistry::class);
    }
}
