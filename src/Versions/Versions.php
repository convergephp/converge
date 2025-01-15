<?php

namespace Fluxtor\Converge\Clusters;

use Closure;
use Fluxtor\Converge\CollectionsRegistry;
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
