<?php

declare(strict_types=1);

namespace Converge\Http\Middleware;

use Closure;
use Converge\Facades\Converge;
use Illuminate\Http\Request;

class UseCluster
{
    public function handle(Request $request, Closure $next, string $module, ?string $clusterId = null): mixed
    {
        /** @phpstan-ignore-next-line */
        if ($clusterId) {
            Converge::getModule($module)->useCluster($clusterId);
        }

        return $next($request);
    }
}
