<?php

namespace Fluxtor\Converge\Versions;

use Closure;
use Fluxtor\Converge\CollectionsRegistry;
use Fluxtor\Converge\Concerns\CanHandleClusters;
use Illuminate\Support\Collection;

class Versions extends CollectionsRegistry
{
    public function createItem()
    {
        return new Version();
    }
    public function createLink()
    {
        return new VersionLink();
    }
}
