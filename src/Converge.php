<?php

declare(strict_types=1);

namespace Fluxtor\Converge;

class Converge
{
    protected ?Module $activeModule = null;

    public function __construct()
    {
        // Resolve the panel registry to set the current panel
        // as the default, which uses a `resolving()` callback.
        // if (app()->resolving(ModuleRegistry::class)) {
            resolve(ModuleRegistry::class);
            // dd('hre');
        // }
    }

    public function setActiveModule(Module $module)
    {
        $this->activeModule = $module;
    }
}
