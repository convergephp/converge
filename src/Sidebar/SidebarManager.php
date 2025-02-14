<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Sidebar;

use Fluxtor\Converge\FilesTreeBuilder;
use Fluxtor\Converge\Module;
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

        if ($module->hasClusters()) {
            $this->generateBaseUrlFromCluster($module);
        }

        if ($module->hasVersions()) {

            $version = $module->getUsedVersion();

            if ($cluster = $module->getUsedCluster()) {
                $urlGenerator = $cluster?->getUrlGenerator();

                $this->baseUrl = (bool) $urlGenerator
                    ? $urlGenerator->generate($rawModuleRoute, $version?->getRoute(), $cluster->getRoute())
                    : $moduleRoute;

                return;
            }

            $urlGenerator = $version?->getUrlGenerator();

            $this->baseUrl = (bool) $urlGenerator
                ? $urlGenerator->generate($rawModuleRoute, $version->getRoute())
                : $moduleRoute;
        }
        $this->baseUrl ??= $moduleRoute;
    }

    // public function generateBaseUrl($module)
    // {
    //     // if module has clusters
    //     return match (true) {
    //         $module->hasClusters() => $this->generateBaseUrlFromCluster($module),
    //     };
    // }

    public function generateBaseUrlFromCluster(Module $module)
    {
        $cluster = $module->getUsedCluster();
        // dd($cluster);

        $urlGenerator = $cluster?->getUrlGenerator();

        $this->baseUrl = $urlGenerator ? $urlGenerator->generate($module->getRawRoutePath(), null, $cluster->getRoute()) : $module->getRoutePath();
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
