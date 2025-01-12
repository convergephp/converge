<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Navigation;

use Illuminate\Support\Collection;
use InvalidArgumentException;

final class NavigationBuilder
{
    /**
     * Build navigation items from a tree structure.
     *
     * @param array $tree
     * @return Collection
     */
    public static function build(array $tree): Collection
    {
        $items = new Collection();
        return (new static())->process($items, $tree);
    }

    /**
     * Process the tree structure and populate navigation items.
     *
     * @param Collection $items
     * @param array $tree
     * @param int $depth
     * @return Collection
     */
    public function process(Collection $items, array $tree, int $depth = 0): Collection
    {
        foreach ($tree as $key => $node) {
            match ($node['type']) {
                'file' => $this->addFileNode($items, $node, $key, $depth),
                'folder' => $this->addGroupNode($items, $node, $key, $depth),
                default => throw new InvalidArgumentException("Unknown type: {$node['type']}"),
            };
        }

        return $items;
    }

    /**
     * Add a file item to the navigation collection.
     *
     * @param Collection $items
     * @param array $node
     * @param int $sortKey
     * @param int $depth
     * @return void
     */
    private function addFileNode(Collection $items, array $node, int $sortKey, int $depth): void
    {
        $items->add(
            NavigationItem::make()
                ->label($node['label'])
                ->path($node['path'])
                ->url($node['url'])
                ->sort($sortKey)
                ->depth($depth)
        );
    }

    /**
     * This method ensures that only non-empty groups are added to the navigation.
     * A group is skipped if it:
     *  - Has no children, due to being an empty folder.
     *  - Exceeds the maximum depth limit defined in the tree-building process.
     *
     * The method recursively processes the group's children, incrementing the depth
     * to maintain the correct hierarchy in the navigation structure.
     *
     * @param Collection $items
     * @param array $node
     * @param int $sort
     * @param int $depth
     * @return void
     */
    private function addGroupNode(Collection $items, array $node, int $sort, int $depth): void
    {
        if (count($node['children']) < 1) {
            return;
        }
        
        $group = NavigationGroup::make($node['label'])
            ->sort($sort)
            ->depth($depth);

        $items->add($group);

        $children = $node['children'];
        $this->process($group->getItems(), $children, $depth + 1);
    }
}
