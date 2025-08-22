<?php

namespace Converge\Routing\UrlBuilders;

use Converge\Routing\Context\ContextCollection;
use Converge\Routing\UrlBuilders\Contracts\UrlBuilder;

/**
 * Hierarchical URL builder - contexts are applied in defined order
 */
class HierarchicalUrlBuilder implements UrlBuilder
{
    public function build(string $baseUri, ContextCollection $contexts): string
    {
        $uri = $baseUri;

        // Use ordered contexts for consistent URL structure
        foreach ($contexts->getOrdered() as $context) {
            if (!$context->isDefault()) {
                $uri = $this->appendContext($uri, $context->getRoute());
            }
        }

        return $uri;
    }

    private function appendContext(string $uri, string $contextRoute): string
    {
        return trim($uri, '/') . '/' . trim($contextRoute, '/');
    }
}
