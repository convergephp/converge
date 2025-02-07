<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Sidebar;

use Fluxtor\Converge\FilesTreeBuilder;
use Fluxtor\Converge\Versions\Version;
use Illuminate\Support\Collection;

class SidebarManager
{
    public function __construct(
        protected string $path,
        protected int $depth,
        protected ?Version $version,
        protected ?string $versionUrl = null,
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
                $this->versionUrl = $urlGenerator->generate($this->rawModuleRoute, $this->version->getRoute());
            } else {
                $this->versionUrl = $this->moduleRoute;
            }
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
        $items = SidebarBuilder::build($tree[0], versionUrl: $this->versionUrl);

        return $items;
    }
}
