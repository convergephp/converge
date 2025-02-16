<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Providers;

use Fluxtor\Converge\Commands\ModuleMakeCommand;
use Fluxtor\Converge\ContentMap;
use Fluxtor\Converge\Converge;
use Fluxtor\Converge\FilesTreeBuilder;
use Fluxtor\Converge\ModuleRegistry;
use Fluxtor\Converge\Repository;
use Fluxtor\Converge\Services\ThemeService;
use Fluxtor\Converge\Sidebar\SidebarManager;
use Fluxtor\Converge\Views\Layout;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;

class ConvergeServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->register(provider: RouteServiceProvider::class, force: true);

        // $this->app->scoped(Converge::class, function () {
        //     return new Converge;
        // });

        $this->app->scoped('converge', fn() => new Converge);

        $this->app->scoped(Repository::class, fn() => new Repository);

        $this->app->singleton(ModuleRegistry::class, fn() => new ModuleRegistry);

        $this->app->singleton(ContentMap::class, fn($app) => new ContentMap($app->make(FilesTreeBuilder::class)));

        $this->app->singleton(FilesTreeBuilder::class, fn() => new FilesTreeBuilder);

        // charge the config file
        $this->mergeConfigFrom(
            __DIR__ . '/../../config/converge.php',
            'converge'
        );
    }

    public function boot(): void
    {
        $this->publishes([
            __DIR__ . '/../../config/converge.php' => config_path('converge.php'),
        ], 'converge-config');

        $this->loadViewsFrom(path: __DIR__ . '/../../resources/views', namespace: 'converge');

        Blade::anonymousComponentPath(path: __DIR__ . '/../../resources/views/components', prefix: 'converge');

        Blade::component('converge-layout', Layout::class);

        if ($this->app->runningInConsole()) {
            $this->commands([
                ModuleMakeCommand::class,
            ]);
        }
        require_once __DIR__ . '/../helpers.php';

        // Share theme property (colors and layout) a supprimer
    }
}
