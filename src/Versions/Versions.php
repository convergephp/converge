<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Versions;

use Fluxtor\Converge\CollectionsRegistry;

class Versions extends CollectionsRegistry
{
    public function createItem(): Version
    {
        return new Version();
    }

    public function createLink(): VersionLink
    {
        return new VersionLink();
    }
}
