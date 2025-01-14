<?php

namespace Fluxtor\Converge\Concerns;

use Fluxtor\Converge\Sidebar\SidebarManager;

trait HasSidebar
{

    protected $navigationItems;

    public function getSidebarItems()
    {
        return new SidebarManager($this->getPath(), $this->Depth());
    }
}
