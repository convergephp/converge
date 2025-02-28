<?php

declare(strict_types=1);

namespace Fluxtor\Converge\MenuItems;

use Closure;
use Fluxtor\Converge\Concerns\HasIcon;
use Fluxtor\Converge\Concerns\HasLabel;
use Fluxtor\Converge\Concerns\HasSort;
use Fluxtor\Converge\Concerns\HasStyles;
use Fluxtor\Converge\Concerns\Resolver;
use Illuminate\Support\Collection;

class MenuItemGroup
{
    use HasIcon;
    use HasLabel;
    use HasSort;
    use HasStyles;
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

        $this->items->push($item);

        return $this;
    }

    public function push(Closure $callable)
    {
        $this->add($callable);

        return $this;
    }

    final public function hasItems(): bool
    {
        return $this->getItems()->isNotEmpty();
    }

    final public function getItems()
    {
        return $this->items->filter(fn (MenuItem $item) => $item->isVisible());
    }
}
