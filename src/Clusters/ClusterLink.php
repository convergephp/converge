<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Clusters;

use Fluxtor\Converge\Concerns\HasUrl;
use Fluxtor\Converge\Concerns\HasSort;
use Fluxtor\Converge\Concerns\HasLabel;

class ClusterLink
{
    use HasLabel;
    use HasUrl;
    use HasSort;
}
