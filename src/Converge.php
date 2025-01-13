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
        app()->resolved(ModuleRegistry::class) || app(ModuleRegistry::class);
    }
    public function setActiveModule(Module $module)
    {
        $this->activeModule = $module;
    }
}
