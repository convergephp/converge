<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Concerns;

use Closure;
use Fluxtor\Converge\Clusters\Cluster;
use Fluxtor\Converge\Clusters\Clusters;
use Fluxtor\Converge\Repository;
use Illuminate\Support\Collection;

trait CanHandleClusters
{
    protected Collection $clusters;

    protected ?Cluster $activeCluster = null;

    protected ?Cluster $defaultCluster = null;

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
        $this->activeCluster = $this->clusters
            ->merge(optional($this->getUsedVersion())->getClusters())
            ->first(fn ($item) => $item->getRoute() === $id);

        app(Repository::class)->setActiveCluster($this->activeCluster);

        return $this;
    }

    public function defineClusters(Closure $callable): static
    {
        $clusters = new Clusters();

        $callable($clusters);

        $this->clusters = $clusters->getItems();

        $this->defaultCluster = $clusters->getDefault();

        return $this;
    }

    public function getClusterId()
    {
        return $this->activeClusterId;
    }

    public function getUsedCluster(): ?Cluster
    {
        return $this->activeCluster;
    }

    public function getDefaultCluster()
    {
        return $this->defaultCluster;
    }

    public function getClusters(): Collection
    {
        return $this->clusters;
    }
}
