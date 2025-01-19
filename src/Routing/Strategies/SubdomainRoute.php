<?php

namespace Fluxtor\Converge\Routing\Strategies;

use Illuminate\Support\Facades\Route;
use Fluxtor\Converge\Versions\Version;
use Fluxtor\Converge\Contracts\RouteStrategy;
use Fluxtor\Converge\Http\Middleware\UseModule;
use Fluxtor\Converge\Http\Controllers\FileController;
use Fluxtor\Converge\Http\Controllers\ModuleController;


class SubdomainRouteStrategy implements RouteStrategy
{
    public function generateRoutes($module): void
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
