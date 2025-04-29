<?php

declare(strict_types=1);

namespace Converge\Providers;

use Illuminate\Foundation\Support\Providers\RouteServiceProvider as baseServiceProvider;
use Illuminate\Support\Facades\Route;

final class RouteServiceProvider extends baseServiceProvider
{
    public function boot(): void
    {
        $this->routes(function () {
            Route::middleware('web')->group(__DIR__.'/../../routes/web.php');
        });
    }
}
