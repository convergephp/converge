<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Concerns;

use Closure;
use Fluxtor\Converge\Versions\Versions;
use Illuminate\Support\Collection;

trait CanHandleVersions
{
    protected Collection $versions;
    protected ?string $activeVersion;

    public function initVersions(): void
    {
        $this->versions = new Collection();
    }

    public function hasVersions(): bool
    {
        return ! $this->versions->isEmpty();
    }

    public function useVersion(string $version): void
    {
        $this->activeVersion = $version;
    }

    public function getUsedVersion(): ?string
    {
        $this->activeVersion;
        return $this;
    }
    public function defineVersions(Closure $callable): static
    {
        $versions = new Versions();

        $callable($versions);

        $this->versions = $versions->getItems();

        return $this;
    }

    public function getVersions(): Collection
    {
        return $this->versions;
    }
}
