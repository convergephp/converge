<?php

namespace Fluxtor\Converge\TableOfContent;

use Closure;

class TocItem
{
    protected string|Closure $label;

    protected int $depth;


    public static function make()
    {
        $static = resolve(static::class);
        return $static;
    }
    public function getDepth(): int
    {
        return $this->depth;
    }

    public function getLabel(): mixed
    {
        return $this->label;
    }
}
