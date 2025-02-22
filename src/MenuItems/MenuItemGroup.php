<?php

namespace Fluxtor\Converge\MenuItems;

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
}
