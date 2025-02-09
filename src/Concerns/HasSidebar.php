<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Concerns;

use Fluxtor\Converge\Sidebar\SidebarManager;
use Illuminate\Support\Collection;

trait HasSidebar
{
    /**
     * lazy initialization
     */
    public function getSidebarItems(): Collection
    {
        $sidebar = new SidebarManager($this->getPath(), $this->getMaxDepth(), $this->getUsedVersion());

        return $sidebar->getItems();
    }

    /**
     * the clusters defined on the module level
     *
     * @return Collection<int,Cluster|ClusterLink>
     */
    public function getModuleClusters()
    {
        return resolve('converge')->getClusters();
    }

    /**
     * the clusters defined on the version (under-module) level
     *
     * @return Collection<int,Cluster|ClusterLink>
     */
    public function getScopedClusters()
    {
        return resolve('converge')->getUsedVersion()?->getClusters();
    }

    public function allClusters()
    {
        return $this->sortItems($this->getModuleClusters()->merge($this->getScopedClusters()));
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
