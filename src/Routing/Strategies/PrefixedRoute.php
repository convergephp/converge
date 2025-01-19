<?php
namespace Fluxtor\Converge\Routing\Strategies;

use Illuminate\Support\Facades\Route;
use Fluxtor\Converge\Versions\Version;
use Fluxtor\Converge\Contracts\RouteStrategy;
use Fluxtor\Converge\Http\Middleware\UseModule;
use Fluxtor\Converge\Http\Middleware\UseVersion;
use Fluxtor\Converge\Http\Controllers\FileController;
use Fluxtor\Converge\Http\Controllers\ModuleController;

class PrefixedRoute implements RouteStrategy
{
    public function generateRoutes($module): void
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
