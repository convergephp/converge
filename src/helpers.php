<?php

declare(strict_types=1);

namespace Fluxtor\Converge;

use Fluxtor\Converge\Clusters\Cluster;
use Fluxtor\Converge\Clusters\ClusterLink;

if (! function_exists('converge')) {
    /** @return \Fluxtor\Converge\Converge */
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
        return '/' . trim($url ?? '', '/');
    }
}

if (! function_exists('Fluxtor\Converge\generate_cluster_url')) {
    function generate_cluster_url($cluster)
    {
        if ($cluster instanceof ClusterLink) {
            return $cluster->getRoute();
        }

        if ($cluster->isDefault()) {
            return \Fluxtor\Converge\format_url($cluster->getRoute());
        }
        // this if it a top module cluster

        return $cluster->getUrlGenerator()->generate(converge()->getRawRoutePath(), null, $cluster->getRoute());

        // what if the cluster belongs to a version
    }
}
