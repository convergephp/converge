<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Concerns;

use Closure;

trait HasDepth
{
    protected int|Closure $maxDepth = PHP_INT_MAX;

    public function depth(string|Closure|null $maxDepth): static
    {
        $this->maxDepth = $maxDepth;

        return $this;
    }

    public function getDepth()
    {
        return $this->resolve($this->maxDepth);
    }
}
