<?php

namespace Fluxtor\Converge\Navigation;

use Illuminate\Support\Collection;

class NavigationBuilder
{
    public function build(array $tree)
    {
        $items = Collection::make();
        $this->process($items, $tree);
        return $items;
    }
    public function process(Collection $items, $tree, int $depth = 0)
    {
        collect($tree)->map(function (array $item, int $key) use ($items) {
            if ($item['type'] === 'file') {
                // Add a NavigationItem for files
                $items->add(NavigationItem::make()
                    ->label($item['title'])
                    ->path($item['path'])
                    ->url($item['url'])
                    ->sort($key));
            } elseif ($item['type'] === 'folder') {
                // Create a group for the folder
                $group = NavigationGroup::make($item['title']);
                // Add the group to the items collection
                $items->add($group);

                // Recursively process the children of this folder
                $this->process($group->getItems(), $item['children']);
            }
        });
    }
}
