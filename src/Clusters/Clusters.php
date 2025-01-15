<?php

namespace Fluxtor\Converge\Clusters;

use Fluxtor\Converge\CollectionsRegistry;

class Clusters extends CollectionsRegistry
{

    public function createItem()
    {
        return new Cluster();
    }
    public function createLink()
    {
        return new ClusterLink();
    }
}
