<?php

namespace Fluxtor\Converge\Facades;

use Closure;
use Fluxtor\Converge\Module;
use Fluxtor\Converge\ModuleRegistry;
use Illuminate\Support\Facades\Facade;

class Converge extends Facade
{

    protected static function getFacadeAccessor(): string
    {
        return \Fluxtor\Converge\Converge::class;
    }

    /**
     * @param Module $module
     * @return void
     */
    public static function registerModule(Module | Closure $module): void
    {
        // dd(value($module));
        static::getFacadeApplication()->resolving(
            ModuleRegistry::class,
            fn(ModuleRegistry $registry) => $registry->add($module()),
        );
    }
}
