<?php

namespace Fluxtor\Converge\Concerns;

use Closure;

trait Resolver
{
    public function resolve(mixed $value)
    {
        if ($value instanceof Closure) {
            return $value();
        }
        return $value;
    }
}
