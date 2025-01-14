<?php

namespace Fluxtor\Converge\Http\Middleware;

use Closure;
use Fluxtor\Converge\Facades\Converge;
use Fluxtor\Converge\Module;
use Illuminate\Http\Request;

use function Fluxtor\Converge\converge;

class ActivateModule
{
    public function handle(Request $request, Closure $next, string $module): mixed
    {
        dump($module);
        
        $module = Converge::getModule($module);
        dump($module);
        Converge::setActiveModule($module);
        // Converge::;
        dd(app('converge')->getActiveModule());

        return $next($request);
    }
}
