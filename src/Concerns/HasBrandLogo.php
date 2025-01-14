<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Concerns;

use Closure;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Support\HtmlString;

trait HasBrandLogo
{
    protected string|HtmlString|Closure|null $brandLogo = null;

    protected string|Closure|null $brandLogoHeight = null;

    protected string|HtmlString|Closure|null $darkModeBrandLogo = null;

    public function brandLogo(string|Htmlable|Closure|null $logo): static
    {
        $this->brandLogo = $logo;

        return $this;
    }

    public function brandLogoHeight(string|Closure|null $height): static
    {
        $this->brandLogoHeight = $height;

        return $this;
    }

    public function darkModeBrandLogo(string|Htmlable|Closure|null $logo): static
    {
        $this->darkModeBrandLogo = $logo;

        return $this;
    }

    public function getBrandLogo(): string|Htmlable|null
    {
        return $this->resolve($this->brandLogo);
    }

    public function getBrandLogoHeight(): ?string
    {
        return $this->resolve($this->brandLogoHeight);
    }

    public function getDarkModeBrandLogo(): string|Htmlable|null
    {
        return $this->resolve($this->darkModeBrandLogo);
    }
}
