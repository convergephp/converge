<?php

namespace Fluxtor\Converge\Routing\Versions;

use Fluxtor\Converge\Contracts\VersionUrlGenerator;

class SubdomainUrlGenerator implements VersionUrlGenerator
{
    public function __construct(protected string $domain)
    {
        static::$domain = $domain;
    }

    public static function generate(string $moduleUri =  null, string $versionUri): string
    {
        return $versionUri . '.' . static::$domain;
    }
}
