<?php

namespace Fluxtor\Converge\MenuItems;

use Fluxtor\Converge\Concerns\HasLabel;
use Fluxtor\Converge\Concerns\HasSort;
use Fluxtor\Converge\Concerns\HasUrl;

class MenuItem
{
    use HasLabel;
    use HasUrl;
    use HasSort;
}
