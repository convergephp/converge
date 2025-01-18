<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Versions;

use Closure;
use Fluxtor\Converge\Clusters\Cluster;
use Fluxtor\Converge\Clusters\Clusters;
use Fluxtor\Converge\Concerns\HasLabel;
use Fluxtor\Converge\Concerns\HasPath;
use Fluxtor\Converge\Concerns\Resolver;
use Illuminate\Support\Collection;
use LogicException;

class Version
{
    use HasLabel;
    use HasPath;
    use Resolver;

    /** @var Collection<int,Cluster> */
    protected Collection $scopedClusters;

    protected bool $isQuiet = false;

    protected bool $isDefault = false;

    protected ?string $route = null;

    public function __construct()
    {
        $this->scopedClusters = new Collection();
    }

    public function hasClusters(): bool
    {
        return $this->scopedClusters->isEmpty();
    }

    public function default(bool $condition = true)
    {
        $this->isDefault = $condition;

        return $this;
    }

    public function route(string $route): static
    {
        $this->route = $route;

        return $this;
    }

    public function getRoute(): ?string
    {
        return $this->route;
    }
    public function getPath(): ?string
    {
        return $this->path;
    }

    public function quiet(bool $condition = true): static
    {
        if (! $this->isDefault()) {
            throw new LogicException('Can\'t make non-default version quiet.');
        }
        $this->isQuiet = $condition;

        return $this;
    }

    public function isQuiet()
    {
        return $this->resolve($this->isQuiet);
    }

    public function isDefault()
    {
        return $this->resolve($this->isDefault);
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
