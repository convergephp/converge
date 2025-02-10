<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Clusters;

use Fluxtor\Converge\Concerns\HasPath;
use Fluxtor\Converge\Concerns\HasSort;
use Fluxtor\Converge\Concerns\HasLabel;
use Fluxtor\Converge\Contracts\ClusterUrlGenerator;
use Fluxtor\Converge\Routing\Clusters\AbsoluteUrlGenerator;
use Fluxtor\Converge\Routing\Clusters\PrefixedUrlGenerator;

class Cluster
{
    use HasLabel;
    use HasPath;
    use HasSort;

    protected ?ClusterUrlGenerator $urlGenerator = null;

    protected ?string $clusterId = null;

    protected ?string $route = null;

    public function getUrlGenerator(): ClusterUrlGenerator
    {
        return $this->urlGenerator ?? new PrefixedUrlGenerator();
    }

    public function absoluteUrl(): static
    {
        $this->setUrlGenerator(new AbsoluteUrlGenerator());

        return $this;
    }

    public function absoluteUrlWithVersion(): static
    {
        $this->setUrlGenerator(new AbsoluteUrlGenerator(isRelativeToVersionUrl: true));

        return $this;
    }

    public function getRoute()
    {

        return $this->route;
    }

    public function route(string $route): static
    {
        $this->clusterId = md5($route);

        $this->route = $route;

        return $this;
    }

    public function setUrlGenerator(ClusterUrlGenerator $urlGenerator): static
    {
        $this->urlGenerator = $urlGenerator;

        return $this;
    }
}
