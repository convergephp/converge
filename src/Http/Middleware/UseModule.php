<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Http\Middleware;

use Closure;
use Fluxtor\Converge\Facades\Converge;
use Illuminate\Http\Request;

class UseModule
{
    public function handle(Request $request, Closure $next, string $module): mixed
    {
        /** @phpstan-ignore-next-line */
        $module = Converge::getModule($module);

        resolve('converge')->setActiveModule($module);

        return $next($request);
    }
}
