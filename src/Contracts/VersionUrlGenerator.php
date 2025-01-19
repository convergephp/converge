<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Contracts;

interface VersionUrlGenerator
{
    public static function generate(?string $moduleUri, string $versionUri);
}
