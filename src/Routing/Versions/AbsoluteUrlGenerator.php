<?php

declare(strict_types=1);

namespace Converge\Routing\Versions;

use Converge\Contracts\VersionUrlGenerator;

class AbsoluteUrlGenerator implements VersionUrlGenerator
{
    public static function generate(?string $moduleUri, string $versionUri): string
    {
        return '/'.trim($versionUri, '/');
    }
}
