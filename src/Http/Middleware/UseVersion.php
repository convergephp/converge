<?php

declare(strict_types=1);

namespace Converge\Http\Middleware;

use Closure;
use Converge\Facades\Converge;
use Illuminate\Http\Request;

class UseVersion
{
    public function handle(Request $request, Closure $next, string $module, ?string $versionId = null): mixed
    {
        /** @phpstan-ignore-next-line */
        if ($versionId) {
            Converge::getModule($module)->useVersion($versionId);
        }

        return $next($request);
    }
}
