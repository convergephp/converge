<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Facades;

use Closure;
use Fluxtor\Converge\Module;
use Fluxtor\Converge\ModuleRegistry;
use Illuminate\Support\Facades\Facade;

class Converge extends Facade
{
    /**
     * @param  Module  $module
     */
    public static function registerModule(Module|Closure $module): void
    {
        // dd(value($module));
        self::getFacadeApplication()->resolving(
            ModuleRegistry::class,
            fn (ModuleRegistry $registry) => $registry->add($module()),
        );
    }

    protected static function getFacadeAccessor(): string
    {
        return \Fluxtor\Converge\Converge::class;
    }
}
