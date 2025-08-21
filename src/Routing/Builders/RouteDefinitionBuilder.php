<?php
namespace Converge\Routing\Builders;

use Converge\Clusters\Cluster;
use Converge\Routing\ValueObjects\RouteDefinition;
use Converge\Versions\Version;
use Illuminate\Support\Collection;

class RouteDefinitionBuilder
{
    public function buildDefinitions(Collection $modules): Collection
    {
        return $modules->flatMap(function ($module) {
            return $this->buildModuleDefinitions($module);
        });
    }

    private function buildModuleDefinitions($module): Collection
    {
        $definitions = collect();

        // Handle versioned cluster routes
        if ($module->hasVersions()) {
            $definitions = $definitions->merge(
                $this->buildVersionedRoutes($module)
            );
        }

        // Handle module cluster routes
        if ($module->hasClusters()) {
            $definitions = $definitions->merge(
                $this->buildClusterRoutes($module)
            );
        }

        // Handle base module route
        $definitions->push(
            $this->buildBaseModuleRoute($module)
        );

        return $definitions;
    }

    private function buildVersionedRoutes($module): Collection
    {
        return $module->getVersions()
            ->filter(fn($v) => $v instanceof Version)
            ->flatMap(fn($version) => $this->buildVersionRoutes($module, $version));
    }

    private function buildVersionRoutes($module, $version): Collection
    {
        $routes = collect();

        // Version with clusters
        if ($version->hasClusters()) {
            $routes = $routes->merge(
                $this->buildVersionClusterRoutes($module, $version)
            );
        }

        // Base version route
        $routes->push($this->buildVersionRoute($module, $version));

        return $routes;
    }

    private function buildVersionClusterRoutes($module, $version): Collection
    {
        return $version->getClusters()
            ->filter(fn($c) => $c instanceof Cluster && !$c->isDefault())
            ->map(fn($cluster) => $this->buildVersionClusterRoute($module, $version, $cluster));
    }

    private function buildClusterRoutes($module): Collection
    {
        return $module->getClusters()
            ->filter(fn($c) => $c instanceof Cluster && !$c->isDefault())
            ->map(fn($cluster) => $this->buildClusterRoute($module, $cluster));
    }

    private function buildVersionClusterRoute($module, $version, $cluster): RouteDefinition
    {
        $urlGenerator = $cluster->getUrlGenerator();
        $uri = $urlGenerator->generate(
            $module->getRawRoutePath(), 
            $version->getRoute(), 
            clusterUri: $cluster->getRoute()
        );

        return new RouteDefinition(
            uri: $uri,
            name: "{$module->getId()}.{$version->getRoute()}.{$cluster->getRoute()}",
            moduleId: $module->getId(),
            versionId: $version->getRoute(),
            clusterId: $cluster->getRoute()
        );
    }

    private function buildVersionRoute($module, $version): RouteDefinition
    {
        $urlGenerator = $version->getUrlGenerator();
        $uri = $urlGenerator->generate(
            $module->getRawRoutePath(), 
            $version->getRoute()
        );

        return new RouteDefinition(
            uri: $uri,
            name: "{$module->getId()}.{$version->getRoute()}",
            moduleId: $module->getId(),
            versionId: $version->getRoute()
        );
    }

    private function buildClusterRoute($module, $cluster): RouteDefinition
    {
        $urlGenerator = $cluster->getUrlGenerator();
        $uri = $urlGenerator->generate(
            $module->getRoutePath(), 
            null, 
            clusterUri: $cluster->getRoute()
        );

        return new RouteDefinition(
            uri: $uri,
            name: "{$module->getId()}.{$cluster->getRoute()}",
            moduleId: $module->getId(),
            clusterId: $cluster->getRoute()
        );
    }

    private function buildBaseModuleRoute($module): RouteDefinition
    {
        $pattern = $this->buildExclusionPattern($module);

        return new RouteDefinition(
            uri: $module->getRoutePath(),
            name: $module->getId(),
            moduleId: $module->getId(),
            pattern: $pattern
        );
    }

    private function buildExclusionPattern($module): string
    {
        $excludedVersions = $module->getVersions()
            ->filter(fn($version) => $version instanceof Version)
            ->map(fn($v) => preg_quote($v->getRoute(), '/'))
            ->implode('|');

        return $excludedVersions 
            ? "^(?!($excludedVersions))(.*)$" 
            : '.*';
    }
}