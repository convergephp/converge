<?php

declare(strict_types=1);

namespace Converge\Concerns;

use Closure;

trait HasSort
{
    use Resolver;

    public int|null|Closure $sort = null;

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
