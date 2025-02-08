<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Sidebar;

use Fluxtor\Converge\FilesTreeBuilder;
use Fluxtor\Converge\Versions\Version;
use Illuminate\Support\Collection;

class SidebarManager
{
    // The baseUrl represents the prefixed route for the module.
    // It can be determined based on the URL generator used, as follows:
    // 
    // 1. If the generator used is `prefixedUrlGenerator()`, it retains the module's route path as prefix ex: docs/versions?/node-url.
    // 2. If the generator used is `absolute`, it removes the module route from the URI.  ex: versions/node-url.
    // 3. If the context does not use versions, the module route remains as the prefix, ex: docs/node-url.
    //    and the node URL is appended in the SidebarBuilder.

    /**
     * 
     * @param string $path
     * @param integer $depth
     * @param Version|null $version
     * @param string|null $baseUrl
     * @param string|null $rawModuleRoute
     * @param string|null $moduleRoute
     */
    public function __construct(
        protected string $path,
        protected int $depth,
        protected ?Version $version,
        protected ?string $baseUrl = null,
        protected ?string $rawModuleRoute = null,
        protected ?string $moduleRoute = null

    ) {
        $module = app('converge')->getActiveModule();
        $this->rawModuleRoute = $module->getRawRoutePath();
        $this->moduleRoute = $module->getRoutePath();

        // we have the route path
        $urlGenerator = $this->version?->getUrlGenerator();

        if ($module->hasVersions()) {
            // Use the version's URL generator if available, otherwise fallback to the module route
            $this->baseUrl = (bool) $urlGenerator
                ? $urlGenerator->generate($this->rawModuleRoute, $this->version->getRoute())
                : $this->moduleRoute;
        }

        // Ensure baseUrl is always set, defaulting to the module route if not already defined
        $this->baseUrl ??= $this->moduleRoute;

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
        // dd($items);
        return $items;
    }
}
