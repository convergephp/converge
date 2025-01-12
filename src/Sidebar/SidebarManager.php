<?php

namespace Fluxtor\Converge;

use Illuminate\Support\Collection;
use Fluxtor\Converge\Sidebar\SidebarBuilder;

class SidebarManager
{
    protected  $module;

    protected Collection $sidebarItem;

    public function get()
    {
        $path = base_path('docs');

        $tree = FilesTreeBuilder::build($path, 2);

        $items = SidebarBuilder::build($tree[0]);

        return $items;
    }
}
