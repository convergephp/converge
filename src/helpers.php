<?php

declare(strict_types=1);

namespace Fluxtor\Converge;

use Fluxtor\Converge\Clusters\Cluster;
use Fluxtor\Converge\Clusters\ClusterLink;
use Fluxtor\Converge\Enums\Interceptor;

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

        return '/'.trim($url ?? '', '/');
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
