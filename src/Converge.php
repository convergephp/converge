<?php

declare(strict_types=1);

namespace Fluxtor\Converge;

class Converge
{
    protected ?Module $activeModule = null;

    public function setActiveModule(Module $module)
    {
        $this->activeModule = $module;
    }

    public function getActiveModule()
    {
        return $this->activeModule;
    }

    public function getPath()
    {
        return $this->getActiveModule()->getPath();
    }

    public function getId()
    {
        return $this->getActiveModule()->getId();
    }

    public function getModule(string $id)
    {
        return resolve(ModuleRegistry::class)->get($id);
    }

    /**
     * get all modules
     *
     * @return array
     */
    public function getModules()
    {
        return resolve(ModuleRegistry::class)->all();
    }
}
