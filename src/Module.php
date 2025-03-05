<?php

declare(strict_types=1);

namespace Fluxtor\Converge;

use Fluxtor\Converge\Concerns\CanHandleClusters;
use Fluxtor\Converge\Concerns\CanHandleDefault;
use Fluxtor\Converge\Concerns\CanHandleMenuItems;
use Fluxtor\Converge\Concerns\CanHandleTableOfContent;
use Fluxtor\Converge\Concerns\CanHandleVersions;
use Fluxtor\Converge\Concerns\HasBrandLogo;
use Fluxtor\Converge\Concerns\HasDepth;
use Fluxtor\Converge\Concerns\HasId;
use Fluxtor\Converge\Concerns\HasIndexPage;
use Fluxtor\Converge\Concerns\HasLabel;
use Fluxtor\Converge\Concerns\HasPath;
use Fluxtor\Converge\Concerns\HasRoutePath;
use Fluxtor\Converge\Concerns\HasSidebar;
use Fluxtor\Converge\Concerns\HasTheme;
use Fluxtor\Converge\Concerns\HasViewsInterceptors;
use Fluxtor\Converge\Concerns\Resolver;

class Module
{
    use CanHandleClusters;
    use CanHandleDefault;
    use CanHandleMenuItems;
    use CanHandleTableOfContent;
    use CanHandleVersions;
    use HasBrandLogo;
    use HasDepth;
    use HasId;
    use HasIndexPage;
    use HasIndexPage;
    use HasLabel;
    use HasPath;
    use HasRoutePath;
    use HasSidebar;
    use HasTheme;
    use HasViewsInterceptors;
    use Resolver;

    // add hasTheme

    public function __construct()
    {
        $this->initClusters();
        $this->initVersions();
        $this->initMenuItems();
    }

    public static function make(): static
    {
        return resolve(static::class);
    }
}
