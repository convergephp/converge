<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Http\Middleware;

use Closure;
use Fluxtor\Converge\Facades\Converge;
use Illuminate\Http\Request;

class ActivateModule
{
    public function handle(Request $request, Closure $next, string $module): mixed
    {
        $module = Converge::getModule($module);

        resolve('converge')->setActiveModule($module);
        
        return $next($request);
    }
}
