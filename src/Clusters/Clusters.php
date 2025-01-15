<?php

namespace Fluxtor\Converge\Clusters;

use Illuminate\Support\Collection;

class Clusters
{
    public Collection $clusters;

    public function add(Cluster $cluster)
    {
        $this->clusters->push($cluster);
    }
}
