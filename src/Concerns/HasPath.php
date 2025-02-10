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
        $this->path = $this->normalizePath($path);

        return $this;
    }

    public function in(string|Closure|null $path): static
    {
        $this->path($path);

        return $this;
    }

    /**
     * cross platform
     *
     * @param  string  $path
     * @return string
     */
    public function normalizePath($path)
    {
        return str_replace(['\\', '/'], DIRECTORY_SEPARATOR, $path);
    }

    /**
     * getter for the path
     *
     * @return string|null
     */
    public function getPath(): string
    {
        dd($this->getClusters());

        // we check first if there is any used version
        // then check if there is any used cluster
        if ($version = $this->getUsedVersion()) {
            return $version->getPath();
        }
        if($cluster = $this->getUsedCluster()){
            dd($cluster);
        }

        return $this->resolve($this->path);
    }
}
