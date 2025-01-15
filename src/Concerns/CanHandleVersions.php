<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Concerns;

use Closure;
use Illuminate\Support\Collection;
use Fluxtor\Converge\Versions\Versions;

trait CanHandleVersions
{
    protected Collection $versions;


    public function initVersions()
    {
        $this->versions = new Collection();
    }

    public function hasVersions(): bool
    {
        return !$this->verions->isEmpty();
    }

    public function defineVersions(Closure $callable): static
    {
        $verions = new Versions();
        $callable($verions);
        return $this;
    }
}
