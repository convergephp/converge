<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Concerns;

use Closure;
use Fluxtor\Converge\Clusters\Clusters;
use Illuminate\Support\Collection;

trait CanHandleClusters
{
    protected Collection $clusters;

    public function initClusters(): void
    {
        $this->clusters = new Collection();
    }

    public function hasClusters(): bool
    {
        return $this->clusters->isEmpty();
    }

    public function defineClusters(Closure $callable): static
    {
        $clusters = new Clusters();

        $callable($clusters);

        $this->clusters = $clusters->getItems();

        return $this;
    }

    public function getClusters(): Collection
    {
        return $this->clusters;
    }
}
