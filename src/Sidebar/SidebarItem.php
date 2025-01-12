<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Sidebar;

use Closure;
use Fluxtor\Converge\Concerns\Resolver;

class SidebarItem
{
    use Resolver;

    protected string|Closure|null $group = null;

    protected string|Closure $label;

    protected string|Closure $path;

    protected int|Closure|null $sort = null;

    protected int $depth;

    protected string|Closure|null $url = null;

    public static function make(): static
    {
        $static = app(static::class);

        return $static;
    }

    public function depth(int $depth)
    {
        $this->depth = $depth;

        return $this;
    }

    public function group(string|Closure|null $group): static
    {
        $this->group = $group;

        return $this;
    }

    public function path(string|Closure|null $path): static
    {
        $this->path = $path;

        return $this;
    }

    public function label(string|Closure $label): static
    {
        $this->label = $label;

        return $this;
    }

    public function sort(int|Closure|null $sort): static
    {
        $this->sort = $sort;

        return $this;
    }

    public function url(string|Closure|null $url): static
    {
        $this->url = $url;

        return $this;
    }

    public function getGroup(): ?string
    {
        return $this->group;
    }

    public function getPath(): ?string
    {
        return $this->path;
    }

    public function getDepth(): int
    {
        return $this->depth;
    }

    public function getLabel(): string
    {
        return $this->label;
    }

    public function getSort(): int
    {
        return $this->sort ?? -1;
    }

    public function getUrl(): ?string
    {
        return $this->url;
    }
}
