<?php

declare(strict_types=1);

namespace Fluxtor\Converge;

use Fluxtor\Converge\Clusters\Cluster;
use Fluxtor\Converge\Clusters\ClusterLink;

if (! function_exists('converge')) {
    function converge(): Converge
    {
        return app('converge');
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
