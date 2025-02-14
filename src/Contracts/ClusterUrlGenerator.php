<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Contracts;

interface ClusterUrlGenerator
{
    public static function generate(
        ?string $moduleUri,
        ?string $versionUri,
        string $clusterUri
    );
}
