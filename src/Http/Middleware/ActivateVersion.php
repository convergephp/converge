<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Http\Middleware;

use Closure;
use Fluxtor\Converge\Facades\Converge;
use Fluxtor\Converge\ModuleRegistry;
use Illuminate\Http\Request;

class ActivateVersion
{
    public function handle(Request $request, Closure $next, string $module, string $versionId = null): mixed
    {
        /** @phpstan-ignore-next-line */
        if (!is_null($versionId)) {
            Converge::getModule($module)->useVersion($versionId);
        }
        dd(Converge::getModule($module));
        return $next($request);
    }
}
