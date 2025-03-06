<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Concerns;

use Closure;
use Fluxtor\Converge\Enums\Interceptor;
use Fluxtor\Converge\Views\ViewInterceptor;
use Illuminate\Contracts\View\View;
use function Fluxtor\Converge\converge;

trait HasCustomFooter
{
    public function footer(Closure $view): static
    {
        resolve(ViewInterceptor::class)->registerViewInterceptor(Interceptor::REPLACE_FOOTER, $view);

        return $this;
    }

    public function hasCustomFooter(): bool
    {
        return (bool) converge()->intercept(point: Interceptor::REPLACE_FOOTER, context: null);
    }

    public function getCustomFooter()
    {
        return resolve(ViewInterceptor::class)->render(point: Interceptor::REPLACE_FOOTER, context: null);
    }

}
