<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Providers;

use Fluxtor\Converge\ContentMap;
use Fluxtor\Converge\Converge;
use Fluxtor\Converge\FilesTreeBuilder;
use Fluxtor\Converge\ModuleRegistry;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;

class ConvergeServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->register(provider: RouteServiceProvider::class, force: true);

        $this->app->bind('sidebar', function () {
            return new \Fluxtor\Converge\Sidebar\SidebarManager();
        });
        
        $this->app->scoped(Converge::class, function () {
            return new \Fluxtor\Converge\Converge();
        });

        $this->app->scoped(ModuleRegistry::class, function () {
            return new \Fluxtor\Converge\ModuleRegistry();
        });

        $this->app->singleton(ContentMap::class, function ($app) {
            return new \Fluxtor\Converge\ContentMap($app->make(FilesTreeBuilder::class));
        });
    }

    public function boot(): void
    {
        $this->publishes([
            __DIR__ . '/../config/converge.php' => config_path('converge.php'),
        ]);

        $this->loadViewsFrom(path: __DIR__ . '/../../resources/views', namespace: 'converge');

        Blade::anonymousComponentPath(path: __DIR__ . '/../../resources/views/components', prefix: 'converge');
    }
}
