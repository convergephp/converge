<?php

declare(strict_types=1);

namespace Converge\Routing\Versions;

use Converge\Contracts\VersionUrlGenerator;

// @TODO
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
