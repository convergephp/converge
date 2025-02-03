<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Routing\Versions;

use Fluxtor\Converge\Contracts\VersionUrlGenerator;

class PrefixedUrlGenerator implements VersionUrlGenerator
{
    public static function generate(?string $moduleUri, string $versionUri): string
    {
        $url = '/'.trim($moduleUri, '/').'/'.trim($versionUri, '/');

        return $url;
    }
}
