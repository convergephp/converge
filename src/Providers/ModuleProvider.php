<?php

declare(strict_types=1);

namespace Converge\Providers;

use Converge\Module;
use Converge\ModuleRegistry;
use Illuminate\Support\ServiceProvider;

abstract class ModuleProvider extends ServiceProvider
{
    abstract public function module(Module $module): Module;

    final public function register(): void
    {
        resolve(ModuleRegistry::class)->add($this->module(Module::make()));
    }
}
