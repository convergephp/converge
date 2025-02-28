<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Concerns;

use Closure;

trait CanOpenUrlInNewTab
{
    protected bool|Closure $shouldOpenUrlInNewTab = false;

    public function openUrlInNewTab(bool|Closure $condition = true): static
    {
        $this->shouldOpenUrlInNewTab = $condition;

        return $this;
    }

    public function shouldOpenUrlInNewTab(): bool
    {
        return (bool) $this->resolve($this->shouldOpenUrlInNewTab);
    }
}
