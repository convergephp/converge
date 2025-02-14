<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Routing\Clusters;

use Fluxtor\Converge\Contracts\ClusterUrlGenerator;

class AbsoluteUrlGenerator implements ClusterUrlGenerator
{
    public function __construct(
        protected bool $isRelativeToVersionUrl = false
    ) {}

    /**
     * Generate a full URL from the given components.
     *
     * @param  string|null  $moduleUri  The module URI, don't required for this case.
     * @param  string|null  $versionUri  The version URI, or null if not applicable.
     * @param  string  $clusterUri  The cluster URI (required).
     * @return string The constructed URL.
     */
    public static function generate(
        ?string $moduleUri,
        ?string $versionUri,
        string $clusterUri
    ) {
        $url = '';

        if (static::$isRelativeToVersionUrl && ! empty($versionUri)) {
            $url = '/'.trim($versionUri, '/');
        }

        // Append the cluster URI, ensuring proper formatting
        $url .= '/'.ltrim($clusterUri, '/');

        return $url;
    }
}
