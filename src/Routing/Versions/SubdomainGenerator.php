<?php

namespace Fluxtor\Converge\Routing\Versions;

use Fluxtor\Converge\Contracts\VersionUrlGenerator;

class SubdomainUrlGenerator implements VersionUrlGenerator
{
    public function __construct(protected string $domain) {}

    public static function generate(?string $moduleUri = null, string $versionUri) {}
}
