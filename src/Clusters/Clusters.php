<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Clusters;

use Fluxtor\Converge\CollectionsRegistry;

class Clusters extends CollectionsRegistry
{
    public function createItem(): Cluster
    {
        return new Cluster();
    }

    public function createLink(): ClusterLink
    {
        return new ClusterLink();
    }
}
