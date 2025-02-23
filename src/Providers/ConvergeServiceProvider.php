<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Providers;

use Fluxtor\Converge\Commands\ModuleMakeCommand;
use Fluxtor\Converge\ContentMap;
use Fluxtor\Converge\Converge;
use Fluxtor\Converge\FilesTreeBuilder;
use Fluxtor\Converge\ModuleRegistry;
use Fluxtor\Converge\Repository;
use Fluxtor\Converge\TableOfContent\HeadingsExtractor;
use Fluxtor\Converge\TableOfContent\TableOfContent;
use Fluxtor\Converge\Views\Layout;
use Fluxtor\Converge\Views\ViewInterceptor;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;

class ConvergeServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->register(provider: RouteServiceProvider::class, force: true);

        $this->app->scoped('converge', fn() => new Converge);

        $this->app->scoped(Repository::class, fn() => new Repository);

        $this->app->scoped(ViewInterceptor::class, fn() => new ViewInterceptor);

        $this->app->scoped(TableOfContent::class, fn() => new TableOfContent);

        $this->app->singleton(ModuleRegistry::class, fn () => new ModuleRegistry);
      
        $this->app->singleton(FilesTreeBuilder::class, fn() => new FilesTreeBuilder);

        $this->app->singleton(ContentMap::class, fn($app) => new ContentMap($app->make(FilesTreeBuilder::class)));

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
    }
}
