<?php

namespace Fluxtor\Converge\Sidebar;

use Illuminate\Support\Collection;
use Fluxtor\Converge\FilesTreeBuilder;
use Fluxtor\Converge\Sidebar\SidebarBuilder;

class SidebarManager
{
    protected  $module;

    protected Collection $sidebarItem;

    public function getItems()
    {
        $path = base_path('docs');

        $tree = FilesTreeBuilder::build($path, 2);

        $items = SidebarBuilder::build($tree[0]);

        return $items;
    }
}
