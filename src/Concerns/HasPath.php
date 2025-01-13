<?php

namespace Fluxtor\Converge\Concerns;

use Closure;

trait HasPath
{
    /**
     * the path for the desired folder 
     *
     * @var string|Closure|null
     */
    protected string|Closure|null $path = null;

    /**
     * register the path
     *
     * @param string|Closure|null $path
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
