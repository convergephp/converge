<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Routing;

use Fluxtor\Converge\Facades\Converge;
use Fluxtor\Converge\Http\Controllers\FileController;
use Fluxtor\Converge\Http\Controllers\ModuleController;
use Fluxtor\Converge\Http\Middleware\UseModule;
use Fluxtor\Converge\Http\Middleware\UseVersion;
use Fluxtor\Converge\Versions\Version;
use Illuminate\Support\Facades\Route;

class RouteManager
{
    protected array $modules;
    protected RouteStrategy $strategy;

    public function __construct()
    {
        $this->modules = Converge::getModules();
        $this->strategy = new PrefixedRouteStrategy(); // Default strategy
    }

    public function setStrategy(RouteStrategy $strategy): void
    {
        $this->strategy = $strategy;
    }

    public function generateRoutes(): void
    {
        foreach ($this->modules as $module) {
            $this->strategy->generateRoutesForModule($module);
        }
    }
}

interface RouteStrategy
{
    public function generateRoutesForModule($module): void;
}

class PrefixedRouteStrategy implements RouteStrategy
{
    public function generateRoutesForModule($module): void
    {
        $uri = $module->getRoutePath();
        $moduleId = $module->getId();
        $pattern = '.*';
        $name = $moduleId;

        if ($module->hasVersions()) {
            foreach ($module->getVersions() as $version) {
                if (! $version instanceof Version) {
                    continue;
                }

                $versionUri = $uri . '/' . $version->getRoute();
                $versionName = $name . '.' . $version->getRoute();
                $this->generateVersionRoutes($versionUri, $moduleId, $versionName, $version->getRoute());
            }

            $excludedVersions = implode('|', array_map(
                fn($v) => preg_quote($v->getRoute(), '/'),
                $module->getVersions()
                    ->filter(fn($version) => $version instanceof Version)
                    ->toArray()
            ));
            $pattern = "^(?!($excludedVersions))(.*)$";
        }

        $this->generateBaseRoutes($uri, $moduleId, $name, $pattern);
    }

    protected function generateBaseRoutes(string $uri, string $id, string $name, string $pattern): void
    {
        Route::middleware([UseModule::class . ':' . $id])->group(function () use ($name, $uri, $pattern) {
            Route::get($uri, ModuleController::class)->name($name);

            Route::get("{$uri}/{url}", FileController::class)
                ->where('url', $pattern)
                ->name("{$name}.show");
        });
    }

    protected function generateVersionRoutes(string $uri, string $id, string $name, string $versionId): void
    {
        $params = "$id,$versionId";

        Route::middleware([UseModule::class . ':' . $id, UseVersion::class . ':' . $params])->group(function () use ($name, $uri) {
            Route::get($uri, ModuleController::class)->name($name);

            Route::get("{$uri}/{url}", FileController::class)
                ->name("{$name}.show");
        });
    }
}

class SubdomainRouteStrategy implements RouteStrategy
{
    public function generateRoutesForModule($module): void
    {
        $moduleId = $module->getId();
        $name = $moduleId;

        if ($module->hasVersions()) {
            foreach ($module->getVersions() as $version) {
                if (! $version instanceof Version) {
                    continue;
                }

                $versionName = $name . '.' . $version->getRoute();
                $this->generateVersionRoutes($version->getRoute(), $moduleId, $versionName);
            }
        }
    }

    protected function generateVersionRoutes(string $subdomain, string $id, string $name): void
    {
        Route::domain("{$subdomain}.example.com")
            ->middleware([UseModule::class . ':' . $id])
            ->group(function () use ($name) {
                Route::get('/', ModuleController::class)->name($name);

                Route::get('/{url}', FileController::class)
                    ->name("{$name}.show");
            });
    }
}
