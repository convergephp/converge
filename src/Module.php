<?php

declare(strict_types=1);

namespace Fluxtor\Converge;

use Fluxtor\Converge\Concerns\CanHandleClusters;
use Fluxtor\Converge\Concerns\CanHandleDefault;
use Fluxtor\Converge\Concerns\CanHandleVersions;
use Fluxtor\Converge\Concerns\HasDepth;
use Fluxtor\Converge\Concerns\HasId;
use Fluxtor\Converge\Concerns\HasPath;
use Fluxtor\Converge\Concerns\HasRoutePath;
use Fluxtor\Converge\Concerns\HasSidebar;
use Fluxtor\Converge\Concerns\Resolver;

class Module
{
    use CanHandleClusters;
    use CanHandleDefault;
    use CanHandleVersions;
    use HasDepth;
    use HasId;
    use HasPath;
    use HasRoutePath;
    use HasSidebar;
    use Resolver;

    

    public function __construct()
    {
        $this->initClusters();
        $this->initVersions();
    }

    public static function make(): static
    {
        return resolve(static::class);
    }
}
