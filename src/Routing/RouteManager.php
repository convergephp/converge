<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Routing;

use Illuminate\Support\Facades\Route;
use Fluxtor\Converge\Facades\Converge;
use Fluxtor\Converge\Versions\Version;
use Fluxtor\Converge\Contracts\RouteStrategy;
use Fluxtor\Converge\Http\Middleware\UseModule;
use Fluxtor\Converge\Http\Middleware\UseVersion;
use Fluxtor\Converge\Http\Controllers\FileController;
use Fluxtor\Converge\Routing\Strategies\PrefixedRoute;
use Fluxtor\Converge\Http\Controllers\ModuleController;

class RouteManager
{

    public function generateRoutes(): void
    {
        foreach (Converge::getModules() as $module) {
            $moduleUri = $module->getRoutePath();
            $moduleId = $module->getId();
            $defaultPattern = '.*';

            if ($module->hasVersions()) {
                foreach ($module->getVersions() as $version) {
                    if (! $version instanceof Version) {
                        continue;
                    }
                    $urlGenerator = $version->getUrlGenerator();

                    $versionUri = $urlGenerator->generate($moduleUri, $version->getRoute(), $version->getRoute());
                    
                    $versionName = $moduleId . '.' . $version->getRoute();
                    
                    $this->registerRoutes($versionUri, $moduleId, $versionName, versionId: $version->getRoute());
                }
                
            } 
            $this->registerRoutes($moduleUri, $moduleId, $moduleId, $defaultPattern);
        }
    }
    protected function registerRoutes(string $uri, string $moduleId, string $name, string $pattern = '.*', ?string $versionId = null): void
    {
        $params = $versionId ? "$moduleId,$versionId" : $moduleId;

        Route::middleware([UseModule::class . ':' . $moduleId, UseVersion::class . ':' . $params])
            ->group(function () use ($uri, $name, $pattern) {
                Route::get($uri, ModuleController::class)->name($name);
                Route::get("{$uri}/{url}", FileController::class)->where('url', $pattern)->name("{$name}.show");
            });
    }
}
