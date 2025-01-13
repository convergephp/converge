<?php

declare(strict_types=1);

namespace Fluxtor\Converge;

use Illuminate\Support\Facades\App;

class ModuleRegistry
{
    private $registry = [];

    public  function add(Module $module)
    {

        $this->registry[$module->getId()] = $module;

        if (App::make()->resolved(Converge::class)) {
            resolve(Converge::class)->setActiveModule($module);
        }

        App::make()->resolving(
            Converge::class,
            fn (Converge $manager) => $manager->setActiveModule($module),
        );
    }

    public function get($id)
    {
        if (array_key_exists($id, $this->registry)) {
            return $this->registry[$id];
        }
    }
}
