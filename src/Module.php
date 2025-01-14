<?php

declare(strict_types=1);

namespace Fluxtor\Converge;

use Illuminate\Support\Facades\App;
use Fluxtor\Converge\Concerns\HasId;
use Fluxtor\Converge\Concerns\HasPath;
use Fluxtor\Converge\Concerns\Resolver;
use Fluxtor\Converge\Concerns\CanHandleDefault;

class Module
{
    use Resolver;
    use HasId;
    use CanHandleDefault;
    use HasPath;


    public static function make(): static
    {
        return resolve(static::class);
    }

   
}
