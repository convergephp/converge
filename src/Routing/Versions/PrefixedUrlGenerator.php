<?php

declare(strict_types=1);

namespace Converge\Routing\Versions;

use Converge\Contracts\VersionUrlGenerator;

class PrefixedUrlGenerator implements VersionUrlGenerator
{
    public static function generate(?string $moduleUri, string $versionUri): string
    {
        $url = '/'.trim($moduleUri, '/').'/'.trim($versionUri, '/');

        return $url;
    }
}
