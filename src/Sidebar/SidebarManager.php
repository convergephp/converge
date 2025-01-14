<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Sidebar;

use Fluxtor\Converge\FilesTreeBuilder;
use Illuminate\Support\Collection;

class SidebarManager
{
    protected Collection $sidebarItem;

    public function getItems($path, FilesTreeBuilder $builder)
    {

        $tree = $builder->build($path, 2);

        $items = SidebarBuilder::build($tree[0]);

        return $items;
    }
}
