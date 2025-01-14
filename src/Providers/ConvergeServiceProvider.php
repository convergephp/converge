<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Providers;

use Fluxtor\Converge\ContentMap;
use Fluxtor\Converge\Converge;
use Fluxtor\Converge\FilesTreeBuilder;
use Fluxtor\Converge\ModuleRegistry;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;

use function Fluxtor\Converge\converge;

class ConvergeServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->register(provider: RouteServiceProvider::class, force: true);

        $this->app->bind('sidebar', function () {
            return new \Fluxtor\Converge\Sidebar\SidebarManager();
        });

        $this->app->singleton(Converge::class, function () {
            return new Converge();
        });
        $this->app->singleton('converge', function () {
            return new Converge();
        });
        
        $this->app->singleton(ModuleRegistry::class, function () {
            return new ModuleRegistry($this->app->make(Converge::class));
        });

        $this->app->singleton(ContentMap::class, function ($app) {
            return new ContentMap($app->make(FilesTreeBuilder::class));
        });
    }

    public function boot(): void
    {
        $this->publishes([
            __DIR__ . '/../config/converge.php' => config_path('converge.php'),
        ]);

        $this->loadViewsFrom(path: __DIR__ . '/../../resources/views', namespace: 'converge');

        Blade::anonymousComponentPath(path: __DIR__ . '/../../resources/views/components', prefix: 'converge');
        require __DIR__ . '/../helpers.php'; // I am dump I can't get it using composer files autoload 🙂   
        // dd(converge());
    }
}
