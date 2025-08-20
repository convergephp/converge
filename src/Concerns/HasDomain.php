<?php

declare(strict_types=1);

namespace Converge\Concerns;

use BackedEnum;
use Closure;

trait HasDomain
{
    protected string|BackedEnum|null|Closure $domain = null;

    public function domain(string|BackedEnum|Closure|null $domain): static
    {
        $this->domain = $domain;

        return $this;
    }

    public function getDomain(): string|BackedEnum|null
    {
        return $this->resolve($this->domain);
    }
}
