<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Sidebar;

use Fluxtor\Converge\FilesTreeBuilder;
use Illuminate\Support\Collection;

class SidebarManager
{
    public function __construct(protected string $path, protected int $depth = PHP_INT_MAX) {}

      public function getItems(): Collection
    {

        $tree = FilesTreeBuilder::build($this->path, $this->depth);

        $items = SidebarBuilder::build($tree[0]);

        return $items;
    }
}
