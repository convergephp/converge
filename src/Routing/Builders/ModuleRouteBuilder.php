<?php

namespace Converge\Routing\Builders;

use Illuminate\Support\Collection;

class ModuleRouteBuilder
{
    private ContextOrderingRule $globalOrderingRule;

    public function __construct(
        private UrlBuilderInterface $urlBuilder = new HierarchicalUrlBuilder(),
        ?ContextOrderingRule $globalOrderingRule = null
    ) {
        $this->globalOrderingRule = $globalOrderingRule ?? ContextOrderingRule::default();
    }

    public function buildAllRoutes(Collection $modules): Collection
    {
        return $modules->flatMap(fn($module) => $this->buildModuleRoutes($module));
    }

    public function buildModuleRoutes($module): Collection
    {
        $baseContexts = $this->extractContextsFromModule($module);
        
        // Apply module-specific ordering if defined, otherwise use global
        $orderingRule = $module->getContextOrderingRule() ?? $this->globalOrderingRule;
        $baseContexts->setOrderingRule($orderingRule);
        
        $routes = collect();

        // Generate routes for all context combinations
        foreach ($baseContexts->getCombinations() as $contextCombination) {
            // Skip if all contexts are default (will be handled by base route)
            if ($contextCombination->getNonDefault()->isEmpty()) {
                continue;
            }

            $uri = $this->urlBuilder->build($module->getRoutePath(), $contextCombination);
            $name = $this->buildRouteName($module->getId(), $contextCombination);
            $pattern = $this->buildPattern($module, $contextCombination);

            $routes->push(new RouteDefinition(
                uri: $uri,
                name: $name,
                moduleId: $module->getId(),
                contexts: $contextCombination,
                pattern: $pattern
            ));
        }

        // Add base module route
        $routes->push(new RouteDefinition(
            uri: $module->getRoutePath(),
            name: $module->getId(),
            moduleId: $module->getId(),
            contexts: new ContextCollection([], $orderingRule),
            pattern: $this->buildExclusionPattern($module)
        ));

        return $routes;
    }

    private function extractContextsFromModule($module): ContextCollection
    {
        $contexts = new ContextCollection();

        // Extract existing contexts (versions, clusters, etc.)
        if ($module->hasVersions()) {
            foreach ($module->getVersions() as $version) {
                $contexts->add(new VersionContext(
                    $version->getId(),
                    $version->getRoute()
                ));
            }
        }

        if ($module->hasClusters()) {
            foreach ($module->getClusters() as $cluster) {
                $contexts->add(new ClusterContext(
                    $cluster->getId(),
                    $cluster->getRoute(),
                    $cluster->isDefault()
                ));
            }
        }

        // Extract new context types
        if ($module->hasLanguages()) {
            foreach ($module->getLanguages() as $language) {
                $contexts->add(new LanguageContext(
                    $language->getId(),
                    $language->getRoute(),
                    $language->isDefault(),
                    $language->getLocale()
                ));
            }
        }

        if ($module->hasDocsModes()) {
            foreach ($module->getDocsModes() as $mode) {
                $contexts->add(new DocsModeContext(
                    $mode->getId(),
                    $mode->getRoute(),
                    $mode->isDefault(),
                    $mode->getStrictness()
                ));
            }
        }

        return $contexts;
    }

    private function buildRouteName(string $moduleId, ContextCollection $contexts): string
    {
        $parts = [$moduleId];
        
        foreach ($contexts->getNonDefault() as $context) {
            $parts[] = $context->getId();
        }
        
        return implode('.', $parts);
    }

    private function buildPattern($module, ContextCollection $contexts): string
    {
        // Build exclusion patterns based on active contexts
        // This is context-aware pattern building
        return '.*'; // Simplified for example
    }

    private function buildExclusionPattern($module): string
    {
        // Build pattern to exclude all contextual routes
        return '.*'; // Simplified for example
    }

    /**
     * Set global ordering rule
     */
    public function setGlobalOrderingRule(ContextOrderingRule $rule): self
    {
        $this->globalOrderingRule = $rule;
        return $this;
    }
}
