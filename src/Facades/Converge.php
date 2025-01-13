<?php
namespace Fluxtor\Converge\Facades;

use Closure;
use Fluxtor\Converge\Module;
use Fluxtor\Converge\ModuleRegistry;
use Illuminate\Support\Facades\Facade;

class Converge extends Facade {
    protected static function getFacadeAccessor(): string
    {
        return 'converge';
    }

    public static function registerPanel(Module | Closure $module): void
    {
        static::getFacadeApplication()->resolving(
            ModuleRegistry::class,
            fn (ModuleRegistry $registry) => $registry->add(value($module)),
        );
    }
}