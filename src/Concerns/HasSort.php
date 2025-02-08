<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Concerns;

use Closure;

trait HasSort
{
    use Resolver;

    protected int|null|Closure $sort = null;

    public function sort(int|Closure $sort): static
    {
        $this->sort = $sort;

        return $this;
    }

    public function getSort(): ?int
    {
        return $this->resolve($this->sort);
    }
}
