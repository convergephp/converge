<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Routing\Clusters;

use Fluxtor\Converge\Contracts\ClusterUrlGenerator;

class AbsoluteUrlGenerator implements ClusterUrlGenerator
{
    protected static bool $isRelativeToVersionUrl = false;

    protected static bool $isRelativeToModuleUrl = false;

    public static function setRelativeToModuleUrl(bool $relative): void
    {
        self::$isRelativeToModuleUrl = $relative;
    }

    public static function setRelativeToVersionUrl(bool $relative): void
    {
        self::$isRelativeToVersionUrl = $relative;
    }

    // public function __construct(
    //     protected bool $isRelativeToVersionUrl = false
    // ) {}

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

        if (self::$isRelativeToModuleUrl && ! empty($moduleUri)) {
            $url = '/'.trim($moduleUri, '/');
        }

        if (self::$isRelativeToVersionUrl && ! empty($versionUri)) {
            $url = '/'.trim($versionUri, '/');
        }

        // Append the cluster URI, ensuring proper formatting
        $url .= '/'.trim($clusterUri, '/');

        return $url;
    }
}
