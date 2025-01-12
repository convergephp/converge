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
                ->label($node['title'] ?? 'Untitled')
                ->path($node['path'] ?? '#')
                ->url($node['url'] ?? null)
                ->sort($sortKey)
                ->depth($depth)
        );
    }

    /**
     * Add a folder item to the navigation collection.
     *
     * @param Collection $items
     * @param array $node
     * @param int $sort
     * @param int $depth
     * @return void
     */
    private function addGroupNode(Collection $items, array $node, int $sort, int $depth): void
    {
        $group = NavigationGroup::make($node['title'] ?? 'Untitled')
            ->sort($sort)
            ->depth($depth);

        $items->add($group);

        $children = $node['children'];
        $this->process($group->getItems(), $children, $depth + 1);
    }
}
