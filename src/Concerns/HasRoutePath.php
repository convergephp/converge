<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Concerns;

use Closure;

trait HasRoutePath
{
    protected string|Closure|null $routePath = null;

    public function routePath(string|Closure|null $routePath): static
    {
        $this->routePath = str($routePath)->ltrim('/')->toString();

        return $this;
    }

    public function getRawRoutePath()
    {
        return $this->resolve($this->routePath);
    }
    public function getRoutePath()
    {
        return $this->getQuietedVersionUrl() ?? $this->resolve($this->routePath);
    }
}
