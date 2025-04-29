<?php

declare(strict_types=1);

namespace Converge\Concerns;

use Closure;

use function Converge\format_url;

trait HasUrl
{
    protected string|Closure|null $url;

    public function url(string|Closure|null $url): static
    {
        $this->url = $url;

        return $this;
    }

    public function getUrl(): ?string
    {
        return $this->getRoute();
    }

    public function getRoute(): ?string
    {

        return $this->resolve($this->url);
    }
}
