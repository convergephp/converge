<?php

declare(strict_types=1);

namespace Fluxtor\Converge;

use Fluxtor\Converge\Clusters\ClusterLink;
use Fluxtor\Converge\Enums\Interceptor;
use Fluxtor\Converge\Sidebar\SidebarGroup;
use PHPUnit\Metadata\UsesDefaultClass;

if (! function_exists('converge')) {
    function converge(): Converge
    {
        return resolve('converge');
    }
}
if (! function_exists('Fluxtor\Converge\format_url')) {
    // /** @return \Fluxtor\Converge\Converge */
    function format_url(?string $url): ?string
    {
        if (is_null($url)) {
            return null;
        }

        return '/' . trim($url ?? '', '/');
    }
}
if (! function_exists('Fluxtor\Converge\intercept')) {
    // /** @return \Fluxtor\Converge\Converge */
    function intercept(Interceptor $point, mixed $context = null)
    {
        return converge()->intercept($point, $context);
    }
}

if (! function_exists('Fluxtor\Converge\generate_cluster_url')) {
    function generate_cluster_url($cluster)
    {

        if ($cluster instanceof ClusterLink) {
            return $cluster->getRoute();
        }

        if ($cluster->isDefault() && filled(Converge()->getUsedVersion())) {
            return converge()->getUsedVersion()->getRoute();
        }
        if ($cluster->isDefault() && blank(Converge()->getUsedVersion())) {
            return \Fluxtor\Converge\format_url(converge()->getRoutePath());
        }

        if (blank($cluster->getRoute())) {
            return;
        }

        return $cluster->getUrlGenerator()->generate(converge()->getRawRoutePath(), null, $cluster->getRoute());

        // @todo how about clusters belongs to a cluster
    }
}

if (! function_exists('Fluxtor\Converge\get_used_cluster')) {
    function get_used_cluster()
    {
        if (converge()->getUsedCluster() === converge()->getDefaultCluster()) {
            dd('de');
        }
    }
}

if (! function_exists('Fluxtor\Converge\has_active_child')) {
    function has_active_child($items): bool
    {
        return $items->contains(function ($item) {
            if ($item instanceof SidebarGroup) {
                return \Fluxtor\Converge\has_active_child($item->getItems());
            }

            return $item->isActive();
        });
    }
}
if (! function_exists('Fluxtor\Converge\format_styles')) {
    function format_styles(?string $styles, ?string $classes, ?string $defaultClasses = null): string
    {
        $attributes = [];

        if (filled($styles)) {
            $attributes[] = 'style="' . e($styles) . '"';
        }

        if (filled($classes) || filled($defaultClasses)) {
            $mergedClasses = trim("$defaultClasses $classes");
            $attributes[] = 'class="' . e($mergedClasses) . '"';
        }

        return implode(' ', $attributes)    ;
    }
}
