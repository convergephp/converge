<?php

declare(strict_types=1);

namespace Converge\Clusters;

use Converge\CollectionsRegistry;

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
