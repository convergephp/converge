<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Versions;

use Fluxtor\Converge\CollectionsRegistry;

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
