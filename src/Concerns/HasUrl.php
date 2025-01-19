<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Concerns;

use Closure;
use InvalidArgumentException;

trait HasUrl
{
    protected string|Closure|null $url;

    public function url(string|Closure|null $url): static
    {
        if (is_string($url) && ! filter_var($url, FILTER_VALIDATE_URL)) {
            throw new InvalidArgumentException("Invalid URL provided: {$url} on module provider");
        }
        $this->url = $url;

        return $this;
    }

    public function getRoute(): ?string
    {
        // @php
        return $this->resolve($this->url);
    }
}
