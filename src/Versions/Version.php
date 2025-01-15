<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Versions;

use Closure;
use Fluxtor\Converge\Clusters\Cluster;
use Fluxtor\Converge\Clusters\Clusters;
use Fluxtor\Converge\Concerns\HasLabel;
use Fluxtor\Converge\Concerns\HasPath;
use Illuminate\Support\Collection;

class Version
{
    use HasLabel;
    use HasPath;

    /** @var Collection<int,Cluster> */
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

    /**
     * module clusters
     *
     * @return Collection<int,Cluster>
     */
    public function getClusters(): Collection
    {
        // dd($this->scopedClusters);
        return $this->scopedClusters;
    }
}
