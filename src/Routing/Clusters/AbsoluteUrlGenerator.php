<?php

namespace Fluxtor\Converge\Routing\Clusters;

use Fluxtor\Converge\Contracts\ClusterUrlGenerator;

class AbsoluteUrlGenerator implements ClusterUrlGenerator
{


    public static function generate(
        ?string $moduleUri = null,
        ?string $versionUri = null,
        string $clusterUri
    ) {
        $url = '';

        if (!empty($versionUri)) {
            $url = '/' . trim($versionUri, '/');
        }

        // Append the cluster URI, ensuring proper formatting
        $url .= '/' . ltrim($clusterUri, '/');

        return $url;
    }
}
