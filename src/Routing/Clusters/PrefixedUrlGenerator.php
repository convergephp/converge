<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Routing\Clusters;

use Fluxtor\Converge\Contracts\ClusterUrlGenerator;

class PrefixedUrlGenerator implements ClusterUrlGenerator
{
    /**
     * Generate a full URL from the given components.
     *
     * @param  string|null  $moduleUri  The module URI .
     * @param  string|null  $versionUri  The version URI, or null if not applicable.
     * @param  string  $clusterUri  The cluster URI (required).
     * @return string The constructed URL.
     */
    public static function generate(
        ?string $moduleUri,
        ?string $versionUri,
        string $clusterUri
    ): string {
        $url = '/'.trim($moduleUri ?? '', '/');

        if (! empty($versionUri)) {
            $url .= '/'.trim($versionUri, '/');
        }

        $url .= '/'.ltrim($clusterUri, '/');

        return $url;
    }
}
