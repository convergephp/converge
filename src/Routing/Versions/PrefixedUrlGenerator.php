<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Routing\Versions;

use Fluxtor\Converge\Contracts\VersionUrlGenerator;

class PrefixedUrlGenerator implements VersionUrlGenerator
{
    public static function generate(?string $moduleUri, string $versionUri)
    {
        return trim($moduleUri, '/').'/'.trim($versionUri, '/');
    }
}
