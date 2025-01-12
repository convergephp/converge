<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Providers;

use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;

class ConvergeServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        $this->publishes([
            __DIR__.'/../config/converge.php' => config_path('converge.php'),
        ]);

        $this->loadViewsFrom(path: __DIR__.'/../../resources/views', namespace: 'converge');

        Blade::anonymousComponentPath(path: __DIR__.'/../../resources/views/components', prefix: 'converge');

        $this->app->register(provider: RouteServiceProvider::class, force: true);

        $this->app->bind('sidebar', function () {
            return new \Fluxtor\Converge\Sidebar\SidebarManager();
        });
    }
}
