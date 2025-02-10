<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Concerns;

use Closure;
use Fluxtor\Converge\Clusters\Cluster;
use Fluxtor\Converge\Clusters\Clusters;
use Illuminate\Support\Collection;

trait CanHandleClusters
{
    protected Collection $clusters;

    protected ?Cluster $activeCluster = null;

    protected ?string $activeClusterId = null;

    public function initClusters(): void
    {
        $this->clusters = new Collection();
    }

    public function hasClusters(): bool
    {
        return ! $this->clusters->isEmpty();
    }

    public function useCluster(string $id): static
    {
        $this->activeClusterId = $this->clusters->first(fn($item) => $item->getRoute() === $id);

        return $this;
    }

    public function defineClusters(Closure $callable): static
    {
        $clusters = new Clusters();

        $callable($clusters);

        $this->clusters = $clusters->getItems();

        return $this;
    }

    public function getClusterId()
    {
        return $this->activeClusterId;
    }

    public function getUsedCluster(): ?Cluster
    {
        return $this->activeVersion;
    }

    public function getClusters(): Collection
    {
        return $this->clusters;
    }
}
