<?php

declare(strict_types=1);

namespace Converge\Providers;

use Converge\Commands\ConvergeBuildCommand;
use Converge\Commands\MakeIssueCommand;
use Converge\Commands\ModuleMakeCommand;
use Converge\Commands\SearchIndexerCommand;
use Converge\ContentMap;
use Converge\Converge;
use Converge\FilesTreeBuilder;
use Converge\ModuleRegistry;
use Converge\Repository;
use Converge\Support\Metadata;
use Converge\TableOfContent\TableOfContent;
use Converge\Views\Layout;
use Converge\Views\ViewInterceptor;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;

class ConvergeServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->register(provider: RouteServiceProvider::class, force: true);

        $this->app->scoped('converge', fn () => new Converge);

        $this->app->scoped(Repository::class, fn () => new Repository);

        $this->app->scoped(ViewInterceptor::class, fn () => new ViewInterceptor);

        $this->app->scoped(TableOfContent::class, fn () => new TableOfContent);

        $this->app->scoped(Metadata::class, fn () => new Metadata);

        $this->app->singleton(ModuleRegistry::class, fn () => new ModuleRegistry);

        $this->app->singleton(FilesTreeBuilder::class, fn () => new FilesTreeBuilder);

        $this->app->singleton(ContentMap::class, fn ($app) => new ContentMap($app->make(FilesTreeBuilder::class)));

        $this->mergeConfigFrom(
            __DIR__.'/../../config/converge.php',
            'converge'
        );
    }

    public function boot(): void
    {
        $this->publishes([
            __DIR__.'/../../config/converge.php' => config_path('converge.php'),
        ], 'converge-config');

        $this->publishes([
            __DIR__.'/../../stubs/starterkit' => base_path('starterkit'),
        ], 'converge-starterkit');

        $this->loadViewsFrom(path: __DIR__.'/../../resources/views', namespace: 'converge');

        Blade::anonymousComponentPath(path: __DIR__.'/../../resources/views/components', prefix: 'converge');

        Blade::component('converge-layout', Layout::class);

        if ($this->app->runningInConsole()) {
            $this->commands([
                ModuleMakeCommand::class,
                SearchIndexerCommand::class,
                ConvergeBuildCommand::class,
            ]);
        }
        require_once __DIR__.'/../helpers.php';
    }
}
