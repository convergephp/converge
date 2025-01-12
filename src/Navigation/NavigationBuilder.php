<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Navigation;

use Illuminate\Support\Collection;
use InvalidArgumentException;

class NavigationBuilder
{
    /**
     * build navigation items from tree structure
     *
     * @return Collection
     */
    public static function build(array $tree)
    {
        $items = new Collection();

        return (new self)->process($items, $tree);
    }

    /**
     * Process the tree structure and populate navigation items.
     *
     * @param  array  $tree
     * @return void
     */
    public function process(Collection $items, $tree, int $depth = 0)
    {
        foreach ($tree as $key => $node) {
            match ($node['type']) {
                'file' => $this->addFileNode($items, $node, $key, $depth),
                'folder' => $this->addGroupNode($items, $node, $key, $depth),
                default => throw new InvalidArgumentException("Unknown type: {$node['type']}")
            };
        }

        return $items;
    }

    /**
     * Add a file item to the navigation collection.
     *
     * @return void
     */
    public function addFileNode(Collection $items, array $node, int $sortKey, int $depth)
    {
        $items->add(
            NavigationItem::make()
                ->label($node['title'])
                ->path($node['path'])
                ->url($node['url'])
                ->sort($sortKey)
                ->depth($depth)
        );
    }

    /**
     * add group (wich is folder) to the navigation collection
     *
     * @return void
     */
    public function addGroupNode(Collection $items, array $node, int $sort, int $depth)
    {
        $group = NavigationGroup::make($node['title'])
            ->sort($sort)
            ->depth($depth);
        // Add the group to the items collection
        $items->add($group);

        // Recursively process the children of this folder
        $this->process($group->getItems(), $node['children'], depth: $depth + 1);
    }
}
