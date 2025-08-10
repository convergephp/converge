<?php

declare(strict_types=1);

namespace Converge;

use Converge\Clusters\ClusterLink;
use Converge\Enums\Interceptor;
use Converge\Sidebar\SidebarGroup;

if (! function_exists('converge')) {
    function converge(): Converge
    {
        return resolve('converge');
    }
}
if (! function_exists('Converge\format_url')) {
    // /** @return \Converge\Converge */
    function format_url(?string $url): ?string
    {
        if (is_null($url)) {
            return null;
        }

        return '/'.trim($url ?? '', '/');
    }
}

if (! function_exists('Converge\file_name_id')) {
    // /** @return \Converge\Converge */
    function file_name_id(?string $id): ?string
    {
        return base_convert((string) crc32($id), 10, 36).'-'.$id;
    }
}

if (! function_exists('Converge\intercept')) {
    // /** @return \Converge\Converge */
    function intercept(Interceptor $point, mixed $context = null)
    {
        return converge()->intercept($point, $context);
    }
}

if (! function_exists('Converge\generate_cluster_url')) {
    function generate_cluster_url($cluster)
    {

        if ($cluster instanceof ClusterLink) {
            return $cluster->getRoute();
        }

        if ($cluster->isDefault() && filled(Converge()->getUsedVersion())) {
            return converge()->getUsedVersion()->getRoute();
        }
        if ($cluster->isDefault() && blank(Converge()->getUsedVersion())) {
            return \Converge\format_url(converge()->getRoutePath());
        }

        if (blank($cluster->getRoute())) {
            return;
        }

        return $cluster->getUrlGenerator()->generate(converge()->getRawRoutePath(), null, $cluster->getRoute());

        // @todo how about clusters belongs to a cluster
    }
}

if (! function_exists('Converge\get_used_cluster')) {
    function get_used_cluster()
    {
        if (converge()->getUsedCluster() === converge()->getDefaultCluster()) {
            // @todo
        }
    }
}

if (! function_exists('Converge\has_active_child')) {
    function has_active_child($items): bool
    {
        return $items->contains(function ($item) {
            if ($item instanceof SidebarGroup) {
                return \Converge\has_active_child($item->getItems());
            }

            return $item->isActive();
        });
    }
}
if (! function_exists('Converge\format_styles')) {
    function format_styles(?string $styles, ?string $classes, ?string $defaultClasses = null): string
    {
        $attributes = [];

        if (filled($styles)) {
            $attributes[] = 'style="'.e($styles).'"';
        }

        if (filled($classes) || filled($defaultClasses)) {
            $mergedClasses = trim("$defaultClasses $classes");
            $attributes[] = 'class="'.e($mergedClasses).'"';
        }

        return implode(' ', $attributes);
    }
}
