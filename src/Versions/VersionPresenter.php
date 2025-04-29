<?php

declare(strict_types=1);

namespace Converge\Versions;

class VersionPresenter
{
    public function __construct(
        protected ?Version $activeVersion,
        protected ?string $versionId,
        protected ?string $label,
        protected ?string $url
    ) {}

    public function getId(): ?string
    {
        return $this->activeVersion?->getId() ?? $this->versionId;
    }

    public function getLabel(): ?string
    {
        return $this->activeVersion?->getLabel() ?? $this->label;
    }

    public function getUrl(): ?string
    {
        return $this->activeVersion?->getRoute() ?? $this->url;
    }

    public function isActive(string $id): bool
    {
        return ($this->activeVersion?->getId() === $id) || ($this->versionId === $id);
    }
}
