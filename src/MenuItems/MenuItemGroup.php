<?php

namespace Fluxtor\Converge\MenuItems;

use Closure;
use Fluxtor\Converge\Concerns\HasLabel;
use Fluxtor\Converge\Concerns\HasSort;
use Fluxtor\Converge\Concerns\Resolver;
use Illuminate\Support\Collection;

class MenuItemGroup
{
    use HasLabel;
    use HasSort;
    use Resolver;
    protected Collection $items;

    public function __construct()
    {
        $this->items = new Collection();
    }

    final public function add(Closure $callback): static
    {
        $item = new MenuItem;

        $callback($item);

        // $this->adjustSort($item);

        $this->items->push($item);
        // dd($this->items);
        return $this;
    }

    public function push(Closure $callable)
    {
        $this->add($callable);

        return $this;
    }

    final public function getItems()
    {
        return $this->items->filter(fn(MenuItem $item) => $item->isVisible());
    }
}
