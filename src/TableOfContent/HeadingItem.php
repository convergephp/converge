<?php

namespace Fluxtor\Converge\TableOfContent;

use Closure;

class HeadingItem
{
    protected string|Closure $label;

    protected string|Closure $slug;

    protected int $level;


    public static function make()
    {
        $static = resolve(static::class);
        return $static;
    }


    public function  level(int $level)
    {
        $this->$level = $level;
        return $this;
    }

    public function  label(string $label)
    {
        $this->$label = $label;
        return $this;
    }


    public function  slug(string $slug)
    {
        $this->$slug = $slug;
        return $this;
    }

    public function getSlug(): string
    {
        return $this->level;
    }


    public function getLevel(): int
    {
        return $this->level;
    }

    public function getLabel(): mixed
    {
        return $this->label;
    }
}
