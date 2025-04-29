<?php

declare(strict_types=1);

namespace Converge\Versions;

use Closure;
use Converge\Clusters\Cluster;
use Converge\Clusters\Clusters;
use Converge\Concerns\HasLabel;
use Converge\Concerns\HasPath;
use Converge\Concerns\HasSort;
use Converge\Concerns\Resolver;
use Converge\Contracts\VersionUrlGenerator;
use Converge\Routing\Versions\AbsoluteUrlGenerator;
use Converge\Routing\Versions\PrefixedUrlGenerator;
use Illuminate\Support\Collection;

class Version
{
    use HasLabel;
    use HasPath;
    use HasSort;
    use Resolver;

    /** @var Collection<int,Cluster> */
    protected Collection $scopedClusters;

    protected ?string $route = null;

    protected ?string $versionId = null;

    protected ?VersionUrlGenerator $urlGenerator = null;

    public function __construct()
    {
        $this->scopedClusters = new Collection();
    }

    public function hasClusters(): bool
    {
        return ! $this->scopedClusters->isEmpty();
    }

    public function route(string $route): static
    {
        $this->versionId = md5($route);

        $this->route = $route;

        return $this;
    }

    public function getId()
    {
        return $this->versionId;
    }

    public function getUrlGenerator(): VersionUrlGenerator
    {
        return $this->urlGenerator ?? new PrefixedUrlGenerator();
    }

    public function absoluteUrl(): static
    {
        return $this->asAbsolute();
    }

    public function getUrl($modulePath)
    {
        return $this->getUrlGenerator()->generate($modulePath, $this->getRoute());
    }

    public function asAbsolute()
    {
        $this->setUrlGenerator(new AbsoluteUrlGenerator());

        return $this;
    }

    public function setUrlGenerator(VersionUrlGenerator $urlGenerator): static
    {
        $this->urlGenerator = $urlGenerator;

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

    public function defineClusters(Closure $callable): static
    {
        $clusters = new Clusters();

        $callable($clusters);

        $this->scopedClusters = $clusters->getItems();

        return $this;
    }

    /**
     * module clusters
     *
     * @return Collection<int,Cluster|ClusterLink>
     */
    public function getClusters(): Collection
    {
        return $this->scopedClusters;
    }
}
