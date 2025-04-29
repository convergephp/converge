<?php

declare(strict_types=1);

namespace Converge\Contracts;

interface VersionUrlGenerator
{
    public static function generate(?string $moduleUri, string $versionUri);
}
