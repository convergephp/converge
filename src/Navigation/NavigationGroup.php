<?php

namespace Fluxtor\Converge\Navigation;

use Fluxtor\Converge\Concerns\Resolver;
use Illuminate\Support\Collection;

class NavigationGroup
{
    use Resolver;
    protected string $label;
    protected Collection $items;
    protected int $depth;

    public function __construct(string $label)
    {
        $this->label = $label;
        $this->items = Collection::make(); // Initialize empty collection
    }

    public static function make(string $label): static
    {
        $static = app(static::class, ['label' => $label]);
        return $static;
    }

    public function label(string $label): static
    {
        $this->label = $label;

        return $this;
    }

    public function addItem(NavigationItem $item): static
    {
        $this->items->push($item);
        return $this;
    }

    public function getLabel(): string
    {
        return $this->label;
    }

    public function getItems(): Collection
    {
        return $this->items;
    }
}
