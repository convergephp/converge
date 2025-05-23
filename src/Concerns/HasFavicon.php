<?php

declare(strict_types=1);

namespace Converge\Concerns;

use Closure;

trait HasFavicon
{
    protected string|Closure|null $favicon = null;

    public function favicon(string|Closure|null $url): static
    {
        $this->favicon = $url;

        return $this;
    }

    public function getFavicon(): ?string
    {
        return $this->resolve($this->favicon);
    }
}
