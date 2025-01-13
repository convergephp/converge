<?php

namespace Fluxtor\Converge;

use Illuminate\Support\Facades\App;

class ModuleRegistry
{
    private  $registry = [];

    public  function addModule(Module $module)
    {

        $this->registry[$module->getId()] = $module;

        $module->add();

        if (App::make()->resolved(Module::class)) {
            resolve(Module::class)->setActiveModule($panel);
        }

        App::make()->resolving(
            'filament',
            fn(Module $manager) => $manager->setActiveModule($panel),
        );
    }

    public  function get($id)
    {
        if (array_key_exists($id, $this->registry)) {
            return $this->registry[$id];
        }
    }
}
