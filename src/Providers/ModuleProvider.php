<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Providers;

use Fluxtor\Converge\Module;
use Fluxtor\Converge\ModuleRegistry;
use Fluxtor\Converge\Facades\Converge;
use Illuminate\Support\ServiceProvider;
use Fluxtor\Converge\Converge as ConvergeConverge;

abstract class ModuleProvider extends ServiceProvider
{
    abstract public function module(Module $module): Module;

    final public function register(): void
    {
        resolve(ModuleRegistry::class)->add($this->module(Module::make()));
        // Converge::registerModule(fn(): Module => $this->module(Module::make()));
    }
}
