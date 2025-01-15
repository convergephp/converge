<?php

declare(strict_types=1);

namespace Fluxtor\Converge;

use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Context;

class ModuleRegistry
{
    private array $registry = [];

    private string $default;

    public function __construct(private Converge $converge) {}

    public function add(Module $module)
    {

        $this->registry[$module->getId()] = $module;

        $this->loadTheActiveModuleIntoTheContext($module);
        if ($module->isDefault()) {
            $this->default = $module->getId();
            $this->putActiveModuleIntoTheContext($module);
        }
    }

    public function loadTheActiveModuleIntoTheContext($module)
    {
        Context::add('active_module', $module);
    }

    public function putActiveModuleIntoTheContext(Module $module)
    {
        // if (App::resolved('converge')) {
        //     app('converge')->setCurrentPanel($module);
        //     dd('here');
        // }

        App::resolving(
            Converge::class,
            fn (Converge $converge) => $converge->setActiveModule($module),
        );
    }

    public function get($id)
    {
        if (array_key_exists($id, $this->registry)) {
            return $this->registry[$id];
        }
    }

    public function getDefault()
    {
        return $this->default;
    }

    public function all(): array
    {
        return $this->registry;
    }
}
