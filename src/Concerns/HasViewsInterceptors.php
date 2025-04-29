<?php

declare(strict_types=1);

namespace Converge\Concerns;

use Closure;
use Converge\Enums\Interceptor;
use Converge\Views\ViewInterceptor;

trait HasViewsInterceptors
{
    public function intercept(Interceptor $point, Closure $view)
    {
        resolve(ViewInterceptor::class)->registerViewInterceptor($point, $view, addModule: $this->id);

        return $this;
    }
}
