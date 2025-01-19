<?php

namespace Fluxtor\Converge\Contracts;

interface VersionUrlGenerator
{
    public static function generate(?string $moduleUri = null, string $versionUri);
}
