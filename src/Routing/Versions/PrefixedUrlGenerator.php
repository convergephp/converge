<?php

namespace Fluxtor\Converge\Routing\Versions;

use Fluxtor\Converge\Contracts\VersionUrlGenerator;

class PrefixedUrlGenerator implements VersionUrlGenerator
{
    public static function generate(?string $moduleUri = null, string $versionUri)
    {
        return trim($moduleUri, '/') . '/' . trim($versionUri, '/');
    }
}
