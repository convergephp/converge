<?php

namespace Fluxtor\Converge\Clusters;

use Closure;
use Illuminate\Support\Collection;

class Clusters
{
    public Collection $clusters;

    public function __construct()
    {
        $this->clusters = new Collection();
    }

    public function add(Closure $callback)
    {
        $cluster = new Cluster();
        $callback($cluster);
        $this->clusters->push($cluster);
        return $this;
    }
    public function addLink(Closure $callback)
    {
        $cluster = new ClusterLink();
        $callback($cluster);
        $this->clusters->push($cluster);
        return $this;
    }
}
