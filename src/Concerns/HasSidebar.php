<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Concerns;

use Fluxtor\Converge\Sidebar\SidebarManager;

trait HasSidebar
{
    protected $navigationItems;

    public function getSidebarItems()
    {
        // dd('here');
        $sidebar = (new SidebarManager($this->getPath(), $this->getDepth()));
        return $sidebar->getItems();
    }
}
