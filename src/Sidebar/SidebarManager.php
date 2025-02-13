<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Sidebar;

use Fluxtor\Converge\Clusters\Cluster;
use Fluxtor\Converge\FilesTreeBuilder;
use Fluxtor\Converge\Versions\Version;
use Illuminate\Support\Collection;

use function Fluxtor\Converge\converge;

class SidebarManager
{
    protected string $path;
    protected int $depth;
    protected ?string $baseUrl = null;
    // The baseUrl represents the prefixed route for the module.
    // It can be determined based on the URL generator used, as follows:
    //
    // 1. If the generator used is `prefixedUrlGenerator()`, it retains the module's route path as prefix ex: docs/versions?/node-url.
    // 2. If the generator used is `absolute`, it removes the module route from the URI.  ex: versions/node-url.
    // 3. If the context does not use versions, the module route remains as the prefix, ex: docs/node-url.
    //    and the node URL is appended in the SidebarBuilder.

    public function __construct()
    {
        $module = converge()->getActiveModule();

        $rawModuleRoute = $module->getRawRoutePath();

        $moduleRoute = $module->getRoutePath();

        $this->path = $module->getPath();

        $this->depth = $module->getMaxDepth();


        if ($module->hasVersions()) {
            // Use the version's URL generator if available, otherwise fallback to the module route
            $version = $module->getUsedVersion();

            $scopedClusters = $version?->getClusters();
            
            if(filled($scopedClusters)){
                dd($module->getUsedCluster());
            }
            
            $urlGenerator = $version?->getUrlGenerator();

            $this->baseUrl = (bool) $urlGenerator
                ? $urlGenerator->generate($rawModuleRoute, $version->getRoute())
                : $moduleRoute;
            // @todo: handle version cluster
        }

        if ($module->hasClusters()) {

            $cluster = $module->getUsedCluster();
            if (blank($cluster)) return;
            $urlGenerator = $cluster?->getUrlGenerator();

            // Use the cluster's URL generator if available, otherwise fallback to the module route
            $this->baseUrl = (bool) $urlGenerator
                ? $urlGenerator->generate($rawModuleRoute, null, $cluster->getRoute())
                : $moduleRoute;
        }


        // Ensure baseUrl is always set, defaulting to the module route if not already defined
        $this->baseUrl ??= $moduleRoute;
    }

    /**
     * sidebar items
     *
     * @return Collection<int,SidebarItem|SidebarGroup>
     */
    public function getItems(): Collection
    {

        $tree = FilesTreeBuilder::build($this->path, $this->depth);
        $items = SidebarBuilder::build($tree[0], baseUrl: $this->baseUrl);

        return $items;
    }
}
