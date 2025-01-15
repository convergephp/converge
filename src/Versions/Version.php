<?php

namespace Fluxtor\Converge\Versions;

use Closure;
use Illuminate\Support\Collection;
use Fluxtor\Converge\Concerns\HasPath;
use Fluxtor\Converge\Clusters\Clusters;
use Fluxtor\Converge\Concerns\HasLabel;
use Fluxtor\Converge\Concerns\CanHandleClusters;

class Version
{
    use HasLabel;
    use HasPath;
    protected Collection $scopedClusters;

    public function __construct()
    {
        $this->scopedClusters = new Collection();
    }
    public function hasClusters(): bool
    {
        return $this->scopedClusters->isEmpty();
    }

    public function defineScopedClusters(Closure $callable): static
    {
        $clusters = new Clusters();

        $callable($clusters);

        $this->scopedClusters = $clusters->getItems();

        return $this;
    }
    public function getClusters()
    {
        return $this->scopedClusters;
    }
}
