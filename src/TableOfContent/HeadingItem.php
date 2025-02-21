<?php

namespace Fluxtor\Converge\TableOfContent;

use Closure;
use Illuminate\Support\Collection;

class HeadingItem
{
    protected string|Closure|null $label = null;

    protected string|Closure|null $slug = null;

    protected ?int $level = null;

    public Collection $childrens;

    public function __construct()
    {
        $this->childrens = new Collection();
    }

    public static function make()
    {
        $static = resolve(static::class);
        return $static;
    }


    public function  level(int $level)
    {
        $this->level = $level;
        return $this;
    }

    public function  label(string $label)
    {
        $this->label = $label;
        return $this;
    }


    public function  slug(string $slug)
    {
        $this->slug = $slug;
        return $this;
    }

    public function addChild(HeadingItem $item): static
    {
        $this->childrens->add($item);
        return $this;
    }


    public function getSlug(): string
    {
        return $this->slug;
    }


    public function getLevel(): int
    {
        return $this->level;
    }

    public function getLabel(): string
    {
        return $this->label;
    }

    public function getChildrens(): Collection
    {
        return $this->childrens;
    }
}
