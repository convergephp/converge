<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Versions;

use Closure;
use Fluxtor\Converge\Clusters\Cluster;
use Fluxtor\Converge\Clusters\Clusters;
use Fluxtor\Converge\Concerns\HasLabel;
use Fluxtor\Converge\Concerns\HasPath;
use Fluxtor\Converge\Concerns\Resolver;
use Fluxtor\Converge\Contracts\VersionUrlGenerator;
use Fluxtor\Converge\Routing\Versions\PrefixedUrlGenerator;
use Illuminate\Support\Collection;
use LogicException;

class Version
{
    use HasLabel;
    use HasPath;
    use Resolver;

    /** @var Collection<int,Cluster> */
    protected Collection $scopedClusters;

    protected ?string $route = null;

    protected ?VersionUrlGenerator $urlGenerator = null;

    public function __construct()
    {
        $this->scopedClusters = new Collection();
    }

    public function hasClusters(): bool
    {
        return $this->scopedClusters->isEmpty();
    }


    public function route(string $route): static
    {
        $this->route = $route;

        return $this;
    }

    public function getUrlGenerator(): VersionUrlGenerator
    {
        return $this->urlGenerator ?? new PrefixedUrlGenerator();
    }

    public function setUrlGenerator(VersionUrlGenerator $urlGenerator): void
    {
        $this->urlGenerator = $urlGenerator;
    }

    public function getRoute(): ?string
    {
        return $this->route;
    }
    public function getPath(): ?string
    {
        return $this->path;
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
        return $this->scopedClusters;
    }
}
