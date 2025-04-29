<?php

declare(strict_types=1);

namespace Converge;

use Illuminate\Support\Facades\App;

class ModuleRegistry
{
    private array $registry = [];

    private string $default;

    public function add(Module $module): void
    {

        $this->registry[$module->getId()] = $module;

        if ($module->isDefault()) {
            $this->default = $module->getId();
            $this->putActiveModuleIntoTheContext($module);
        }
    }

    public function putActiveModuleIntoTheContext(Module $module): void
    {
        App::resolving(
            Converge::class,
            fn (Converge $converge) => $converge->setActiveModule($module),
        );
    }

    public function get($id): ?Module
    {
        if (array_key_exists($id, $this->registry)) {
            return $this->registry[$id];
        }

        return null;
    }

    public function getDefault(): string
    {
        return $this->default;
    }

    public function all(): array
    {
        return $this->registry;
    }
}
