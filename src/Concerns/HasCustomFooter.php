<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Concerns;

use Fluxtor\Converge\Enums\Interceptor;
use Illuminate\Contracts\View\View;
use function Fluxtor\Converge\converge;

trait HasCustomFooter
{

    public function hasCustomFooter(): bool
    {
        return (bool) converge()->intercept(point: Interceptor::REPLACE_FOOTER, context: null);
    }

}
