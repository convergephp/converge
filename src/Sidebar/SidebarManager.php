<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Sidebar;

use Fluxtor\Converge\FilesTreeBuilder;
use Fluxtor\Converge\Versions\Version;
use Illuminate\Support\Collection;

class SidebarManager
{
    // the baseUrl is the prefixed route it can be the version url 
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
            if (! is_null($urlGenerator)) {
                // it's a real version so to append to it the real module route path
                $this->baseUrl = $urlGenerator->generate($this->rawModuleRoute, $this->version->getRoute());
            } else {
                $this->baseUrl = $this->moduleRoute;
            }
        }
        // the version-Url is always must be set even if there is no version we take the  
        if (is_null($this->baseUrl)) {
            $this->baseUrl = $this->moduleRoute;
        }
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
