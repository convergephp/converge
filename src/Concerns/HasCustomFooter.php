<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Concerns;

use Closure;
use Fluxtor\Converge\Enums\Interceptor;
use Fluxtor\Converge\Views\ViewInterceptor;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Contracts\View\View;
use function Fluxtor\Converge\converge;

trait HasCustomFooter
{

    protected string|Closure|Htmlable|null $footer = null;


    public function footer(string|Closure|null $footer): static
    {
        $this->footer = $footer;

        return $this;
    }

    public function getFooter(): ?string
    {
        return $this->evaluateFooter($this->footer);
    }

    public function evaluateFooter(string|Closure|Htmlable|null $footer): mixed
    {
        if (($footer = $this->resolve($footer)) instanceof Htmlable) {
            return $footer->toHtml();
        }

        return $this->resolve($this->footer);
    }

}
