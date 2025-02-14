<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Clusters;

use Fluxtor\Converge\Concerns\HasLabel;
use Fluxtor\Converge\Concerns\HasSort;
use Fluxtor\Converge\Concerns\HasUrl;

class ClusterLink
{
    use HasLabel;
    use HasSort;
    use HasUrl;

    public function getUrl(): ?string
    {
        return $this->resolve($this->url);
    }

    public function getId()
    {
        return 'cluster-link';
    }
}
