<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Http\Middleware;

use Closure;
use Fluxtor\Converge\Facades\Converge;
use Fluxtor\Converge\ModuleRegistry;
use Illuminate\Http\Request;

class UseCluster
{
    public function handle(Request $request, Closure $next, string $module, string $clusterId = null): mixed
    {
        /** @phpstan-ignore-next-line */
        if ($clusterId) {
            Converge::getModule($module)->useCluster($clusterId);
        }
        return $next($request);
    }
}
