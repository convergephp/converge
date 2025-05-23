<?php

declare(strict_types=1);

namespace Converge\MenuItems;

use Closure;
use Illuminate\Support\Collection;
use InvalidArgumentException;
use ReflectionFunction;

class MenuItems
{
    public ?Collection $items;

    public function __construct()
    {
        $this->items = new Collection;
    }

    public function add(Closure $callable)
    {
        $item = $this->evaluate($callable);

        $callable($item);

        $this->items->push($item);

        return $this;
    }

    public function push(Closure $callable)
    {
        $this->add($callable);

        return $this;
    }

    public function evaluate(Closure $callable)
    {
        $reflection = new ReflectionFunction($callable);

        $parameter = $reflection->getParameters()[0] ?? null;

        if ($parameter && $parameter->getType()) {

            $type = $parameter->getType()->getName();

            if (! is_a($type, MenuItem::class, true) && ! is_a($type, MenuItemGroup::class, true)) {
                throw new InvalidArgumentException('Invalid type provided. Must be MenuItem or MenuItemGroup.');
            }

            return new $type();
        }

        return new MenuItem();
    }

    public function getItems(): ?Collection
    {
        return $this->items;
    }
}
