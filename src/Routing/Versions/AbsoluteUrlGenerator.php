<?php

namespace Fluxtor\Converge\Routing\Versions;

use Fluxtor\Converge\Contracts\VersionUrlGenerator;

class AbsoluteUrlGenerator implements VersionUrlGenerator
{
    public static function generate(string $moduleUri = null, string $versionUri): string
    {
        return '/' . trim($versionUri, '/');
    }
}
