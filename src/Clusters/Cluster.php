<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Clusters;

use Fluxtor\Converge\Concerns\HasSort;
use Fluxtor\Converge\Concerns\HasLabel;
use Fluxtor\Converge\Concerns\HasRawPath;
use Fluxtor\Converge\Contracts\ClusterUrlGenerator;
use Fluxtor\Converge\Routing\Clusters\AbsoluteUrlGenerator;
use Fluxtor\Converge\Routing\Clusters\PrefixedUrlGenerator;
use Illuminate\Foundation\Http\Middleware\ConvertEmptyStringsToNull;

use function Fluxtor\Converge\converge;
use function Fluxtor\Converge\format_url;

class Cluster
{
    use HasLabel;
    use HasRawPath;
    use HasSort;

    protected ?ClusterUrlGenerator $urlGenerator = null;

    protected ?string $clusterId = null;

    public ?string $route = null;

    protected $isDefault = false;

    public function isDefault(): bool
    {
        return $this->isDefault;
    }

    public function default(bool $condition = true): static
    {
        $this->clusterId = 'default-cluster';
        $this->isDefault = $condition;
        return $this;
    }

    public function getUrlGenerator(): ClusterUrlGenerator
    {
        return $this->urlGenerator ?? new PrefixedUrlGenerator();
    }

    public function getId()
    {
        return $this->clusterId;
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

    public function getUrl()
    {
        // if it not a default one we need the provided route to prefix it 

        if ($this->isDefault) {
            if ($version = converge()->getUsedVersion()) {
                return  $version->getUrl(converge()->getRawRoutePath());
            }
            return format_url(converge()->getRawRoutePath());
        }

        $versionUrl = optional(converge()->getUsedVersion())->getUrl(
            converge()->getRawRoutePath()
        );

        return ($this->getUrlGenerator()->generate(
            converge()->getRawRoutePath(),
            converge()->getUsedVersion()?->getRoute(),
            $this->getRoute()
        ));
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
