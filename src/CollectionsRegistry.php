<?php

declare(strict_types=1);

namespace Fluxtor\Converge;

use Closure;
use Illuminate\Support\Collection;

abstract class CollectionsRegistry
{
    public Collection $items;

    public function __construct()
    {
        $this->items = new Collection();
    }

    abstract public function createItem();

    abstract public function createLink();

    final public function add(Closure $callback): static
    {
        $item = $this->createItem();

        $callback($item);

        $this->items->push($item);

        return $this;
    }

    final public function getItems(): Collection
    {
        return $this->items;
    }

    final public function get($key, $id)
    {
        return $this->items->filter(fn ($item) => $id === $item->$key);
    }

    final public function addLink(Closure $callback): static
    {
        $item = $this->createLink();
        $callback($item);
        $this->items->push($item);

        return $this;
    }
}
