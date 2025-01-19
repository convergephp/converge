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
    protected ?string $versionAs = null;

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

    public function versionAs(?string $version): static
    {
        $this->versionAs = $version;
        return $this;
    }
    public function getQuietedVersion()
    {
        return $this->versionAs;
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

    public function getUiVersions(): array
    {
        $moduleRoute = $this->getRoutePath();

        $versions = $this->versions->map(function ($version) use ($moduleRoute) {
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
        })->toArray();

        if ($label = $this->getQuietedVersion()) {
            array_unshift($versions, [
                'type' => 'internal',
                'label' => $label,
                'url' => '/'.$this->getRoutePath() // module level
            ]);
        }
        // dd($versions);
        return $versions;
    }
}
