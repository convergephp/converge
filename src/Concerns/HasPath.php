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

    /**
     * register the path
     *
     * @return Fluxtor\Converge\Module
     */
    public function path(string|Closure|null $path)
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
