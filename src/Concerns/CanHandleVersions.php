<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Concerns;

use Closure;
use Fluxtor\Converge\Versions\Version;
use Fluxtor\Converge\Versions\VersionLink;
use Fluxtor\Converge\Versions\Versions;
use Illuminate\Support\Collection;

trait CanHandleVersions
{
    protected Collection $versions;
    protected ?Version $activeVersion = null;

    public function initVersions(): void
    {
        $this->versions = new Collection();
    }

    public function hasVersions(): bool
    {
        return ! $this->versions->isEmpty();
    }

    public function useVersion(string $id): static
    {
        $this->activeVersion = $this->versions->first(fn($item) => $item->getRoute() === $id);
        return $this;
    }

    public function getUsedVersion(): ?Version
    {
        return $this->activeVersion;
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
    public function getUiVersions(): Collection
    {
        $moduleRoute = $this->getRoutePath();
    
        return $this->versions->map(function ($version) use ($moduleRoute) {
            $versionData = ['label' => $version->getLabel()];
    
            if ($version instanceof Version) {
                return array_merge($versionData, [
                    'type' => 'internal',
                    'url' => '/' . trim($moduleRoute, '/') . '/' . trim($version->getRoute(), '/'),
                ]);
            }
    
            if ($version instanceof VersionLink) {
                return array_merge($versionData, [
                    'type' => 'external',
                    'url' => trim($version->getRoute(), '/'),
                ]);
            }
    
            return $versionData; 
        });
    }
    
}
