<?php

namespace Fluxtor\Converge\MenuItems;

use Closure;
use Illuminate\Support\Collection;

class MenuItems
{
    public ?Collection $items;

    public function __construct()
    {
        $this->items = new Collection;
    }

    public function add(Closure $callable)
    {
        $item = new MenuItem;

        $callable($item);

        $this->items->push($item);

        return $this;
    }

    public function getItems(): ?Collection
    {
        return $this->items;
    }
}
