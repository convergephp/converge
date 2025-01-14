<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Concerns;

use Closure;

trait HasDepth
{
    protected int | Closure | null $depth = PHP_INT_MAX;

    public function depth(string|Closure|null $depth): static
    {
        $this->depth = $depth;

        return $this;
    }

    public function getDepth()
    {
        return $this->resolve($this->depth);
    }
}
