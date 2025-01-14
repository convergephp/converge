<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Concerns;

use Closure;

trait HasPath
{
    /**
     * the path for the desired folder
     */
    protected string|Closure|null $path = null;

    public function path(string|Closure|null $path): static
    {
        $this->path = $path;

        return $this;
    }

    /**
     * getter for the path
     *
     * @return string|null
     */
    public function getPath()
    {
        $this->resolve($this->path);
    }
}
