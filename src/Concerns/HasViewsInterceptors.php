<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Concerns;

use Closure;
use Fluxtor\Converge\Enums\Interceptor;
use Fluxtor\Converge\Views\ViewInterceptor;

use function Fluxtor\Converge\converge;

trait HasViewsInterceptors
{
    public function intercept(Interceptor $point, Closure $view)
    {
        resolve(ViewInterceptor::class)->registerViewInterceptor($point, $view, addModule: $this->id);

        return $this;
    }
}
