<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Providers;

use Illuminate\Support\ServiceProvider;

class ConvergeServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        $this->publishes([
            __DIR__.'/../config/converge.php' => config_path('converge.php'),
        ]);
        $this->app->register(provider: RouteServiceProvider::class, force: true);
    }
}
