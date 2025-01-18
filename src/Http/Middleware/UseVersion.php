<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Http\Middleware;

use Closure;
use Fluxtor\Converge\Facades\Converge;
use Fluxtor\Converge\ModuleRegistry;
use Illuminate\Http\Request;

class UseVersion
{
    public function handle(Request $request, Closure $next, string $module, string $versionId = null): mixed
    {
        /** @phpstan-ignore-next-line */
        if ($versionId) {
            Converge::getModule($module)->useVersion($versionId);
        }
        return $next($request);
    }
}
