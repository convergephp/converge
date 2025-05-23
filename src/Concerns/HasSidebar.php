<?php

declare(strict_types=1);

namespace Converge\Concerns;

use Converge\Sidebar\SidebarManager;
use Illuminate\Support\Collection;

use function Converge\converge;

trait HasSidebar
{
    /**
     * lazy initialization
     */
    public function getSidebarItems(): Collection
    {
        $sidebar = new SidebarManager();

        return $sidebar->getItems();
    }

    /**
     * the clusters defined on the module level
     *
     * @return Collection<int,Cluster|ClusterLink>
     */
    public function getModuleClusters()
    {
        return converge()->getUsedVersion()?->getClusters() ?? converge()->getClusters();
    }

    /**
     * the clusters defined on the version (under-module) level
     *
     * @return Collection<int,Cluster|ClusterLink>
     */
    public function allClusters()
    {
        $clusters = $this->sortItems($this->getModuleClusters());

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
        return $items->sortBy(fn ($item) => $item->getSort())->values();
    }
}
