<?php

declare(strict_types=1);

namespace Converge\Concerns;

use Closure;
use Converge\Routing\Versions\PrefixedUrlGenerator;

trait HasRoutePath
{
    protected string|Closure|null $routePath = null;

    public function routePath(string|Closure|null $routePath): static
    {
        $this->routePath = str($routePath)->ltrim('/')->toString();

        return $this;
    }

    public function getRawRoutePath(): mixed
    {
        return $this->resolve($this->routePath);
    }

    public function getRoutePath()
    {
        if (! $this->isQuieted()) {
            return $this->getRawRoutePath();
        }

        return PrefixedUrlGenerator::generate(
            moduleUri: $this->getRawRoutePath(),
            versionUri: $this->getQuietedVersionUrl()
        );
    }

    public function isQuieted(): bool
    {
        return $this->getQuietedVersionUrl() !== null;
    }
}
