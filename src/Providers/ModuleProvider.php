<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Providers;

use Fluxtor\Converge\Converge as ConvergeConverge;
use Fluxtor\Converge\Facades\Converge;
use Fluxtor\Converge\Module;
use Illuminate\Support\ServiceProvider;

abstract class ModuleProvider extends ServiceProvider
{
    abstract public function module(Module $module): Module;

    final public function register(): void
    {
        // dd($this->module(Module::make()));  
        // register a module insance
        Converge::registerModule(fn (): Module => $this->module(Module::make()));
        dd(resolve(ConvergeConverge::class));
    }
}
