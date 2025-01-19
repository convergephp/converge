<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Sidebar;

use Fluxtor\Converge\FilesTreeBuilder;
use Fluxtor\Converge\Versions\Version;
use Illuminate\Support\Collection;

class SidebarManager
{
    public function __construct(
        protected string $path,
        protected int $depth,
        protected ?Version $version

    ) {}

    /**
     * sidebar items
     *
     * @return Collection<int,SidebarItem|SidebarGroup>
     */
    public function getItems(): Collection
    {

        $tree = FilesTreeBuilder::build($this->path, $this->depth);

        $items = SidebarBuilder::build($tree[0], version: $this->version?->getRoute());

        return $items;
    }
}
