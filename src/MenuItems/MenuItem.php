<?php

namespace Fluxtor\Converge\MenuItems;

use Closure;
use Fluxtor\Converge\Concerns\CanOpenUrlInNewTab;
use Fluxtor\Converge\Concerns\HasUrl;
use Fluxtor\Converge\Concerns\HasSort;
use Fluxtor\Converge\Concerns\HasLabel;
use Fluxtor\Converge\Concerns\Resolver;

class MenuItem
{
    use HasLabel;
    use HasUrl;
    use HasSort;
    use Resolver;
    use CanOpenUrlInNewTab;
}
