<?php

declare(strict_types=1);

namespace Fluxtor\Converge;

use Illuminate\Support\Facades\App;

class ModuleRegistry
{
    private array $registry = [];

    public function __construct(private Converge $converge ) {
    }

    public function add(Module $module)
    {

        $this->registry[$module->getId()] = $module;

        $this->converge->setActiveModule($module);
        dump($this->registry);
        
    }

    public function get($id)
    {
        if (array_key_exists($id, $this->registry)) {
            return $this->registry[$id];
        }
    }
}
