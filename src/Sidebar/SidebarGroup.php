<?php

declare(strict_types=1);

namespace Converge\Sidebar;

use Converge\Concerns\Resolver;
use Illuminate\Support\Collection;

class SidebarGroup
{
    use Resolver;

    protected string $label;

    /**
     * groups items
     *
     * @var Collection<int,SidebarItem>
     */
    protected Collection $items;

    protected int $depth;

    protected int $sort;

    public function __construct(string $label)
    {
        $this->label = $label;
        $this->items = Collection::make();
    }

    public static function make(string $label): static
    {
        $static = resolve(static::class, ['label' => $label]);

        return $static;
    }

    public function depth(int $depth): static
    {
        $this->depth = $depth;

        return $this;
    }

    public function getDepth(): int
    {
        return $this->depth;
    }

    public function label(string $label): static
    {
        $this->label = $label;

        return $this;
    }

    public function sort(int $sort): static
    {
        $this->sort = $sort;

        return $this;
    }

    public function addItem(SidebarItem $item): static
    {
        $this->items->push($item);

        return $this;
    }

    public function getLabel(): string
    {
        return $this->label;
    }

    public function getSort(): int
    {
        return $this->sort;
    }

    /**
     * group sidebar items
     *
     * @return Collection<int,SidebarItem>
     */
    public function getItems(): Collection
    {
        return $this->items;
    }
}
