<?php

namespace Fluxtor\Converge\Navigation;

use Closure;
use Fluxtor\Converge\Concerns\Resolver;

class NavigationItem
{
    use Resolver;
    protected string | Closure | null $group = null;

    protected string | Closure $label;

    protected string | Closure $path;

    protected int | Closure | null $sort = null;

    protected string | Closure | null $url = null;

    public static function make(string | Closure | null $label = null): static
    {
        $static = app(static::class);
        return $static;
    }



    public function group(string | Closure | null $group): static
    {
        $this->group = $group;

        return $this;
    }
    public function path(string | Closure | null $path): static
    {
        $this->path = $path;

        return $this;
    }


    public function label(string | Closure $label): static
    {
        $this->label = $label;

        return $this;
    }

    public function sort(int | Closure | null $sort): static
    {
        $this->sort = $sort;

        return $this;
    }

    public function url(string | Closure | null $url): static
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



    public function getLabel(): string
    {
        return ($this->label);
    }

    public function getSort(): int
    {
        return ($this->sort) ?? -1;
    }

    public function getUrl(): ?string
    {
        return ($this->url);
    }
}
