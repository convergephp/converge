<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Concerns;

use Closure;
use Fluxtor\Converge\MenuItems\MenuItems;
use Fluxtor\Converge\TableOfContent\TableOfContent;
use Illuminate\Support\Collection;

trait CanHandleMenuItems
{
    public Collection $menuItems;

    public function initMenuItems(): void
    {
        $this->menuItems = new Collection();
    }

    public function defineMenuItems(Closure $callable): static
    {
        $menuItems = new MenuItems;

        $this->menuItems = $callable($menuItems);

        return $this;
    }

    public function getMenuItems(): Collection
    {
        return $this->menuItems;
    }
}
