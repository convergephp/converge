<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Versions;

use Fluxtor\Converge\Concerns\HasLabel;
use Fluxtor\Converge\Concerns\HasUrl;
use Fluxtor\Converge\Concerns\Resolver;

class VersionLink
{
    use HasLabel;
    use HasUrl;
    use Resolver;
}
