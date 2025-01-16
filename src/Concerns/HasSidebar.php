<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Concerns;

use Fluxtor\Converge\Sidebar\SidebarManager;
use Illuminate\Support\Collection;

trait HasSidebar
{
    /**
     * lazy initialization
     */
    public function getSidebarItems(): Collection
    {
        $sidebar = new SidebarManager($this->getPath(), $this->getMaxDepth());

        return $sidebar->getItems();
    }
}
