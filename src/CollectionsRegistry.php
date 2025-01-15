<?php

namespace Fluxtor\Converge;

use Closure;
use Illuminate\Support\Collection;
use Fluxtor\Converge\Clusters\Version;
use Fluxtor\Converge\Clusters\VersionLink;

abstract class CollectionsRegistry
{

    public Collection $items;

    public function __construct()
    {
        $this->items = new Collection();
    }

    abstract function createItem();
    abstract function createLink();

    public function add(Closure $callback)
    {
        $item = $this->createItem();
        $callback($item);
        $this->items->push($item);
        return $this;
    }

    public function getItems(): Collection
    {
        return $this->items;
    }
    public function addLink(Closure $callback)
    {
        $item = $this->createLink();
        $callback($item);
        $this->items->push($item);
        return $this;
    }
}
