<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Sidebar;

use Illuminate\Support\Collection;
use InvalidArgumentException;

final class SidebarBuilder
{
    /**
     * Build Sidebar items from a tree structure.
     *
     * @return Collection<int,SidebarItem|SidebarGroup>
     */
    public static function build(array $tree, ?string $versionUrl = null): Collection
    {
        $items = new Collection();
        dump('side:'.$versionUrl);

        return (new self())->process($items, $tree, versionUrl: $versionUrl);
    }

    /**
     * Process the tree structure and populate Sidebar items.
     *
     * @param  Collection<int,SidebarItem|SidebarGroup>  $items
     * @return Collection<int,SidebarItem|SidebarGroup>
     */
    public function process(Collection $items, array $tree, int $depth = 0, ?string $versionUrl = null): Collection
    {
        // dd($tree);
        foreach ($tree as $key => $node) {
            match ($node['type']) {
                'file' => $this->addFileNode($items, $node, $key, $depth, $versionUrl),
                'folder' => $this->addGroupNode($items, $node, $key, $depth, $versionUrl),
                default => throw new InvalidArgumentException("Unknown type: {$node['type']}"),
            };
        }

        return $items;
    }

    /**
     * add a file item to the sidebar collection
     *
     * @param  Collection<int,SidebarItem|SidebarGroup>  $items
     * @param  array<string,string>  $node
     */
    private function addFileNode(Collection $items, array $node, int $sortKey, int $depth, ?string $versionUrl): void
    {
        $url = $versionUrl ? $versionUrl . '/' . $node['url'] : $node['url']; // prefix the url if needed
        // dd($url);
        $items->add(
            SidebarItem::make()
                ->label($node['label'])
                ->path($node['path'])
                ->url($url)
                ->sort($sortKey)
                ->depth($depth)
        );
    }

    /**
     * This method ensures that only non-empty groups are added to the Sidebar.
     * A group is skipped if it:
     *  - Has no children, due to being an empty folder.
     *  - Exceeds the maximum depth limit defined in the tree-building process.
     *
     * The method recursively processes the group's children, incrementing the depth
     * to maintain the correct hierarchy in the Sidebar structure.
     *
     * @param  Collection<int,SidebarItem|SidebarGroup>  $items
     */
    private function addGroupNode(Collection $items, array $node, int $sort, int $depth, ?string $versionUrl): void
    {
        if (count($node['children']) < 1) {
            return;
        }

        $group = SidebarGroup::make($node['label'])
            ->sort($sort)
            ->depth($depth);

        $items->add($group);

        $children = $node['children'];

        $this->process($group->getItems(), $children, $depth + 1, versionUrl: $versionUrl);
    }
}
