<?php

namespace Fluxtor\Converge\Navigation;

use Illuminate\Support\Collection;

class NavigationBuilder
{
    public static function build(array $tree)
    {
        $items = Collection::make();
        return (new self)->process($items, $tree);
    }
    public function process(Collection $items, $tree, int $depth = 0)
    {
        collect($tree)->map(function (array $item, int $key) use ($items, $depth) {
            match ($item['type']) {
                'file' => $this->addFileItem($items, $item, $key, $depth),
                'folder' => $this->addGroupItem($items, $item, $depth),
                default => throw new \InvalidArgumentException("Unknown type: {$item['type']}")
            };
        });
        return $items;
    }
    public function addFileItem(Collection $items, array $item, int $sortKey, int $depth)
    {
        $items->add(
            NavigationItem::make()
                ->label($item['title'])
                ->path($item['path'])
                ->url($item['url'])
                ->sort($sortKey)
                ->depth($depth)
        );
    }
    public function addGroupItem($items, $item,$sort, $depth)
    {
        $group = NavigationGroup::make($item['title'])
            ->sort($sort)
            ->depth($depth);
        // Add the group to the items collection
        $items->add($group);

        // Recursively process the children of this folder
        $this->process($group->getItems(), $item['children'],);
    }
}
