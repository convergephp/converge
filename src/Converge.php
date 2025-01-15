<?php

declare(strict_types=1);

namespace Fluxtor\Converge;

use Illuminate\Support\Collection;

class Converge
{
    protected ?Module $activeModule = null;

    public function setActiveModule(Module $module)
    {
        $this->activeModule = $module;
    }

    public function getActiveModule(): ?Module
    {
        return $this->activeModule;
    }

    public function getPath(): string
    {
        return $this->getActiveModule()->getPath();
    }

    public function getId(): string
    {
        return $this->getActiveModule()->getId();
    }

    public function getSidebarItems(): Collection
    {
        return $this->getActiveModule()->getSidebarItems();
    }

    public function getClusters(): Collection
    {
        return $this->getActiveModule()->getClusters();
    }

    public function getVersions(): Collection
    {
        return $this->getActiveModule()->getVersions();
    }

    public function getModule(string $id): Module
    {
        return resolve(ModuleRegistry::class)->get($id);
    }

    /**
     * get all modules
     *
     * @return array
     */
    public function getModules(): array
    {
        return resolve(ModuleRegistry::class)->all();
    }
}
