<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Routing\Versions;

use Fluxtor\Converge\Contracts\VersionUrlGenerator;

//@TODO
class SubdomainUrlGenerator implements VersionUrlGenerator
{
    protected static string $domain;

    public function __construct(string $domain)
    {
        static::$domain = $domain;
    }

    public static function generate(?string $moduleUri, string $versionUri): string
    {
        return '/'.$versionUri.'.'.static::$domain;
    }
}
