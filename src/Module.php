<?php

declare(strict_types=1);

namespace Converge;

use Converge\Concerns\CanHandleClusters;
use Converge\Concerns\CanHandleDefault;
use Converge\Concerns\CanHandleMenuItems;
use Converge\Concerns\CanHandleTableOfContent;
use Converge\Concerns\CanHandleVersions;
use Converge\Concerns\HasBrandLogo;
use Converge\Concerns\HasCustomFooter;
use Converge\Concerns\HasDepth;
use Converge\Concerns\HasDomain;
use Converge\Concerns\HasId;
use Converge\Concerns\HasIndexPage;
use Converge\Concerns\HasLabel;
use Converge\Concerns\HasMetadata;
use Converge\Concerns\HasPath;
use Converge\Concerns\HasRoutePath;
use Converge\Concerns\HasSidebar;
use Converge\Concerns\HasTheme;
use Converge\Concerns\HasViewsInterceptors;
use Converge\Concerns\Resolver;

class Module
{
    use CanHandleClusters;
    use CanHandleDefault;
    use CanHandleMenuItems;
    use CanHandleTableOfContent;
    use CanHandleVersions;
    use HasBrandLogo;
    use HasCustomFooter;
    use HasDepth;
    use HasDomain;
    use HasId;
    use HasIndexPage;
    use HasLabel;
    use HasMetadata;
    use HasPath;
    use HasRoutePath;
    use HasSidebar;
    use HasTheme;
    use HasViewsInterceptors;
    use Resolver;

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
