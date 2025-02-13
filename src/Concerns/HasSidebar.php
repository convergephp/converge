<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Concerns;

use Fluxtor\Converge\Sidebar\SidebarManager;
use Illuminate\Support\Collection;

use function Fluxtor\Converge\converge;

trait HasSidebar
{
    /**
     * lazy initialization
     */
    public function getSidebarItems(): Collection
    {
        $sidebar = new SidebarManager(
            path: $this->getPath(),
            depth: $this->getMaxDepth(),
        );

        return $sidebar->getItems();
    }

    /**
     * the clusters defined on the module level
     *
     * @return Collection<int,Cluster|ClusterLink>
     */
    public function getModuleClusters()
    {
        return converge()->getClusters();
    }

    /**
     * the clusters defined on the version (under-module) level
     *
     * @return Collection<int,Cluster|ClusterLink>
     */
    public function getScopedClusters()
    {
        return converge()->getUsedVersion()?->getClusters();
    }

    public function allClusters()
    {
        $clusters = $this->sortItems($this->getModuleClusters()->merge($this->getScopedClusters()));
        return $clusters;
    }

    /**
     * sort items based on the sort property
     *
     * @param  Collection<Version|VersionLink|Cluster|ClusterLink>  $items
     * @return Collection<Version|VersionLink|Cluster|ClusterLink>
     */
    private function sortItems(Collection $items): Collection
    {
        return $items->sortBy(fn($item) => $item->getSort())->values();
    }
}
