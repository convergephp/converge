<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Concerns;

use Closure;

trait HasUrl
{
    protected string|Closure|null $url;

    public function url(string|Closure|null $url): static
    {
        $this->url = $url;

        return $this;
    }

    public function getRoute(): ?string
    {
        // @php
        return $this->resolve($this->url);
    }
}
