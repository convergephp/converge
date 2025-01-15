<?php

namespace Fluxtor\Converge\Clusters;

use Closure;
use Illuminate\Support\Collection;

class Versions
{
    public Collection $clusters;

    public function __construct()
    {
        $this->clusters = new Collection();
    }

    public function add(Closure $callback)
    {
        $cluster = new Version();
        $callback($cluster);
        $this->clusters->push($cluster);
        return $this;
    }
    public function addLink(Version $callback)
    {
        $cluster = new VersionLink();
        $callback($cluster);
        $this->clusters->push($cluster);
        return $this;
    }
}
