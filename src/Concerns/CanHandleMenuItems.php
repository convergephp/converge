<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Concerns;

use Closure;
use Fluxtor\Converge\MenuItems\MenuItems;
use Illuminate\Support\Collection;

trait CanHandleMenuItems
{
    public ?Collection $menuItems;

    public function initMenuItems(): void
    {
        $this->menuItems = new Collection();
    }

    public function defineMenuItems(Closure $callable): static
    {
        $menuItems = new MenuItems();

        $callable($menuItems);

        $this->menuItems = $menuItems->getItems();

        return $this;
    }

    public function getMenuItems(): Collection
    {
        return $this->menuItems;
    }
}
