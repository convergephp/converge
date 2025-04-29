<?php

declare(strict_types=1);

namespace Converge\Concerns;

use Closure;
use Converge\Repository;
use Converge\Versions\Version;
use Converge\Versions\VersionLink;
use Converge\Versions\Versions;
use Illuminate\Support\Collection;
use LogicException;

trait CanHandleVersions
{
    /**
     * @var Collection<int,Version|VersionLink>
     */
    protected Collection $versions;

    protected ?Version $activeVersion = null;

    protected ?string $versionAs = null;

    protected ?string $versionId = null;

    protected ?string $quietedVersionUrl = null;

    public function initVersions(): void
    {
        $this->versions = new Collection();
    }

    public function hasVersions(): bool
    {
        return ! $this->versions->isEmpty();
    }

    public function getVersionId()
    {
        return $this->versionId;
    }

    public function quietedVersionUrl(?string $url): static
    {
        $this->ensureVersionLabelSet();
        $this->versionId = md5($url);
        $this->quietedVersionUrl = $url;

        return $this;
    }

    public function latestVersionUrl(?string $url): static
    {
        return $this->quietedVersionUrl($url);
    }

    public function getQuietedVersionUrl(): ?string
    {
        return $this->quietedVersionUrl;
    }

    /**
     * $id represent the route
     */
    public function useVersion(string $id): static
    {
        $this->activeVersion = $this->versions->first(fn (Version $item) => $item->getRoute() === $id);
        resolve(Repository::class)->setActiveVersion($this->activeVersion);

        return $this;
    }

    public function versionAs(?string $version): static
    {
        $this->versionAs = $version;

        return $this;
    }

    public function latestVersionLabel(?string $label)
    {
        return $this->versionAs($label);
    }

    public function getQuietedVersion(): ?string
    {
        return $this->versionAs;
    }

    public function getUsedVersion(): ?Version
    {
        return $this->activeVersion;
    }

    public function getUiUsedVersion(): ?array
    {
        return [
            'id' => $this->activeVersion?->getId() ?? $this->versionId,
            'label' => $this->activeVersion?->getLabel() ?? $this->getQuietedVersion(),
            'url' => $this->activeVersion?->getRoute() ?? $this->getRoutePath(),
            'isActive' => fn ($id) => $this->isActive($id),
        ];
    }

    public function isActive($id)
    {
        return $this->activeVersion ?
            $this->activeVersion->getId() === $id :
            $this->versionId === $id;
    }

    public function defineVersions(Closure $callable): static
    {
        $this->ensureVersionLabelSet();

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
        $moduleRoute = $this->getRawRoutePath();

        $versions = $this->versions->map(function ($version) use ($moduleRoute) {

            $versionData = [
                'label' => $version->getLabel(),
            ];

            if ($version instanceof Version) {
                return array_merge($versionData, [
                    'id' => $version->getId(),
                    'type' => 'internal',
                    'url' => $version->getUrlGenerator()->generate($moduleRoute, $version->getRoute()),
                ]);
            }

            if ($version instanceof VersionLink) {
                return array_merge($versionData, [
                    'id' => 'link',
                    'type' => 'link',
                    'url' => trim($version->getRoute(), '/'),
                ]);
            }

            return $versionData;
        })->toArray();

        if ($label = $this->getQuietedVersion()) {
            //
            $route = $this->getRoutePath();
            array_unshift($versions, [
                'id' => $this->versionId,
                'type' => 'internal',
                'label' => $label,
                'url' => '/'.trim($route, '/'),
            ]);
        }

        return $versions;
    }

    public function ensureVersionLabelSet()
    {
        if (! $this->getQuietedVersion()) {
            throw new LogicException('No default version label set, Use latestVersionLabel() to define which version should be used.');
        }
    }
}
