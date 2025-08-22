<?php

declare(strict_types=1);

namespace Converge\Clusters;

use Closure;
use Converge\Concerns\HasDomain;
use Converge\Concerns\HasLabel;
use Converge\Concerns\HasRawPath;
use Converge\Concerns\HasSort;
use Converge\Contracts\ClusterUrlGenerator;
use Converge\Routing\Clusters\AbsoluteUrlGenerator;
use Converge\Routing\Clusters\PrefixedUrlGenerator;
use Illuminate\Contracts\Support\Htmlable;

use function Converge\converge;
use function Converge\format_url;

class Cluster
{
    use HasDomain;
    use HasLabel;
    use HasRawPath;
    use HasSort;

    public ?string $route = null;

    protected string|Closure|Htmlable|null $icon = null;

    protected ?ClusterUrlGenerator $urlGenerator = null;

    protected ?string $clusterId = null;

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

    public function absoluteUrlWithVersionUrl(): static
    {

        AbsoluteUrlGenerator::setRelativeToVersionUrl(true);
        $this->setUrlGenerator(new AbsoluteUrlGenerator());

        return $this;
    }

    public function absoluteUrlWithModuleUrl(): static
    {
        AbsoluteUrlGenerator::setRelativeToModuleUrl(true);
        $this->setUrlGenerator(new AbsoluteUrlGenerator());

        return $this;
    }

    public function getRoute()
    {
        return $this->route;
    }

    public function getUrl()
    {
        $converge = converge();

        if ($this->isDefault) {
            if ($version = $converge->getUsedVersion()) {
                return $version->getUrl($converge->getRawRoutePath());
            }

            return format_url($converge->getRoutePath());
        }

        if ($version = $converge->getUsedVersion()) {
            return $this->getUrlGenerator()->generate(
                $converge->getRawRoutePath(),
                $version->getRoute(),
                $this->getRoute()
            );
        }

        return $this->getUrlGenerator()->generate(
            $converge->getRoutePath(),
            $converge->getUsedVersion()?->getRoute(),
            $this->getRoute()
        );
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

    public function icon(string|Closure|null $icon): static
    {
        $this->icon = $icon;

        return $this;
    }

    public function getIcon()
    {

        return $this->evaluteIcon($this->icon);
    }

    public function evaluteIcon(string|Closure|Htmlable|null $icon)
    {
        if (($icon = $this->resolve($icon)) instanceof Htmlable) {
            return $icon->toHtml();
        }

        return $this->resolve($this->icon);
    }
}
