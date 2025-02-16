<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Concerns;

use Closure;
use Fluxtor\Converge\Repository;

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
     * the active path within the request
     *
     * @return string|null
     */
    public function getPath(): string
    {
        return resolve(Repository::class)->getActivePath();
    }

    /**
     * the raw path provided on module level
     *
     * @return string
     */
    public function getRawPath()
    {
        return $this->resolve($this->path);
    }
}
