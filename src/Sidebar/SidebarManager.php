<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Sidebar;

use Illuminate\Support\Collection;
use Fluxtor\Converge\FilesTreeBuilder;
use Fluxtor\Converge\Sidebar\SidebarItem;
use Fluxtor\Converge\Sidebar\SidebarGroup;

class SidebarManager
{
    public function __construct(protected string $path, protected int $depth = PHP_INT_MAX) {}

    /**
     * sidebar items
     *
     * @return Collection<int,SidebarItem|SidebarGroup>
     */
    public function getItems(): Collection
    {

        $tree = FilesTreeBuilder::build($this->path, $this->depth);

        $items = SidebarBuilder::build($tree[0]);
        return $items;
    }
}
