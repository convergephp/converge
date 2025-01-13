<?php

declare(strict_types=1);

namespace Fluxtor\Converge;

use Illuminate\Support\Facades\App;
use Fluxtor\Converge\Concerns\HasId;
use Fluxtor\Converge\Concerns\HasPath;

class Module
{
    use HasId;
    use HasPath;

    public static function make(): static
    {
        return App::make(static::class);
    }
}
