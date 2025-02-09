<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Providers;

use Fluxtor\Converge\Commands\ModuleMakeCommand;
use Fluxtor\Converge\ContentMap;
use Fluxtor\Converge\Converge;
use Fluxtor\Converge\FilesTreeBuilder;
use Fluxtor\Converge\ModuleRegistry;
use Fluxtor\Converge\Sidebar\SidebarManager;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;

class ConvergeServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->register(provider: RouteServiceProvider::class, force: true);

        $this->app->scoped(Converge::class, function () {
            return new Converge();
        });

        $this->app->scoped('converge', function () {
            return new Converge();
        });

        // $this->app->scoped(SidebarManager::class, function () {
        //     return new SidebarManager();
        // });

        $this->app->singleton(ModuleRegistry::class, function () {
            return new ModuleRegistry();
        });

        $this->app->singleton(ContentMap::class, function ($app) {
            return new ContentMap($app->make(FilesTreeBuilder::class));
        });

        $this->app->singleton(FilesTreeBuilder::class, function () {
            return new FilesTreeBuilder();
        });

    }

    public function boot(): void
    {
        $this->publishes([
            __DIR__.'/../config/converge.php' => config_path('converge.php'),
        ]);

        $this->loadViewsFrom(path: __DIR__.'/../../resources/views', namespace: 'converge');

        Blade::anonymousComponentPath(path: __DIR__.'/../../resources/views/components', prefix: 'converge');

        if ($this->app->runningInConsole()) {
            $this->commands([
                ModuleMakeCommand::class,
            ]);
        }
    }
}
