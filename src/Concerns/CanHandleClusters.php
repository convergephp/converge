<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Concerns;

use Closure;
use Illuminate\Support\Collection;

trait CanHandleClusters
{
    protected Collection $clusters;

    public function hasClusters(): bool
    {
        return $this->clusters->isEmpty();
    }

    public function defineClusters(Closure $callable): static
    {
        $cluster = new Cluster();
        $callable();

        return $this;
    }
}
