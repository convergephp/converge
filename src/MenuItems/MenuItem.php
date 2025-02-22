<?php

namespace Fluxtor\Converge\MenuItems;

use Closure;
use Fluxtor\Converge\Concerns\HasUrl;
use Fluxtor\Converge\Concerns\HasSort;
use Fluxtor\Converge\Concerns\HasLabel;
use Fluxtor\Converge\Concerns\Resolver;

class MenuItem
{
    use HasLabel;
    use HasUrl;
    use HasSort;
    use Resolver;

    protected $shouldOpenUrlInNewTab = false;

    public function openUrlInNewTab(bool | Closure $condition = true): static
    {
        $this->shouldOpenUrlInNewTab = $condition;
        return $this;
    }

    public function shouldOpenUrlInNewTab(): bool
    {
        return (bool) $this->resolve($this->shouldOpenUrlInNewTab);
    }
}
