<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Sidebar;

use Closure;
use Fluxtor\Converge\Concerns\Resolver;

class SidebarItem
{
    use Resolver;

    protected ?string $group = null;

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

    public function depth(int $depth): static
    {
        $this->depth = $depth;

        return $this;
    }

    public function group(?string $group): static
    {
        $this->group = $group;

        return $this;
    }

    public function path(string|Closure $path): static
    {
        $this->path = $path;

        return $this;
    }

    public function isActive(): bool
    {
        return dd(request()->url(), $this->getUrl());
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

    public function getPath(): mixed
    {
        return $this->resolve($this->path);
    }

    public function getDepth(): int
    {
        return $this->depth;
    }

    public function getLabel(): mixed
    {
        return $this->resolve($this->label);
    }

    public function getSort(): mixed
    {
        return $this->resolve($this->sort) ?? -1;
    }

    public function getUrl(): mixed
    {
        return $this->resolve($this->url);
    }
}
