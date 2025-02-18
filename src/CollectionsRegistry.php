<?php

declare(strict_types=1);

namespace Fluxtor\Converge;

use Closure;
use Fluxtor\Converge\Clusters\Cluster;
use Fluxtor\Converge\Clusters\ClusterLink;
use Fluxtor\Converge\Versions\Version;
use Fluxtor\Converge\Versions\VersionLink;
use Illuminate\Support\Collection;
use LogicException;

abstract class CollectionsRegistry
{
    public Collection $items;

    private int $currentSortIndex = 0;

    private Version|Cluster|null $default = null;

    public function __construct()
    {
        $this->items = new Collection();
    }

    abstract public function createItem();

    abstract public function createLink();

    final public function add(Closure $callback): static
    {
        $item = $this->createItem();

        $callback($item);

        $this->adjustSort($item);

        $this->items->push($item);

        return $this;
    }

    final public function default()
    {

        $item = $this->items->last();

        $item->default();

        $this->default = $item;
    }

    final public function getDefault()
    {
        return $this->default;
    }

    final public function getItems(): Collection
    {
        return $this->sortItems($this->items);
    }

    final public function get($key, $id)
    {
        return $this->items->filter(fn ($item) => $id === $item->$key);
    }

    final public function addLink(Closure $callback): static
    {
        $item = $this->createLink();

        $callback($item);

        $this->adjustSort($item);

        $this->items->push($item);

        return $this;
    }

    /**
     * @return void
     */
    final public function adjustSort(Version|VersionLink|Cluster|ClusterLink $item)
    {
        $item->getSort() ?? $item->sort(++$this->currentSortIndex);
    }

    final public function ensureDefaultSet()
    {
        throw new LogicException(
            'No default cluster label is set. Please specify a default cluster for the module. '.
                'Call the ->default() method on one of your clusters.'
        );
    }

    /**
     * sort items based on the sort property
     *
     * @param  Collection<Version|VersionLink|Cluster|ClusterLink>  $items
     * @return Collection<Version|VersionLink|Cluster|ClusterLink>
     */
    private function sortItems(Collection $items): Collection
    {
        return $items->sortBy(fn (Version|VersionLink|Cluster|ClusterLink $item) => $item->getSort())->values();
    }
}
