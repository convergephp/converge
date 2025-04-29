<?php

declare(strict_types=1);

namespace Converge\Versions;

use Converge\Concerns\HasLabel;
use Converge\Concerns\HasSort;
use Converge\Concerns\HasUrl;
use Converge\Concerns\Resolver;

class VersionLink
{
    use HasLabel;
    use HasSort;
    use HasUrl;
    use Resolver;
}
