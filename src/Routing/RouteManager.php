<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Routing;

use Fluxtor\Converge\Documents\Markdown;
use Fluxtor\Converge\Facades\Converge;
use Fluxtor\Converge\Http\Controllers\FileController;
use Fluxtor\Converge\Http\Controllers\ModuleController;
use Fluxtor\Converge\Http\Middleware\UseModule;
use Fluxtor\Converge\Http\Middleware\UseVersion;
use Fluxtor\Converge\Versions\Version;
use Illuminate\Support\Facades\Route;

final class RouteManager
{
    public function generateRoutes(): void
    {
        foreach (Converge::getModules() as $module) {

            $rawModuleUri = $module->getRawRoutePath();
            $quietedModuleUri = $module->getRoutePath(); // can be route path or quieted version for versionned modules 
            $isQuieted = $quietedModuleUri != $rawModuleUri;

            $moduleId = $module->getId();
            $pattern = '.*';
            if ($module->hasVersions()) {
                foreach ($module->getVersions() as $version) {
                    if (! $version instanceof Version) {
                        continue;
                    }
                    $urlGenerator = $version->getUrlGenerator();

                    $versionUri = $urlGenerator->generate($rawModuleUri, $version->getRoute(), $version->getRoute());

                    $versionName = $moduleId . '.' . $version->getRoute();

                    $this->registerRoutes($versionUri, $moduleId, $versionName, versionId: $version->getRoute());
                }
            }
            $excludedVersions = implode('|', array_map(
                fn($v) => preg_quote($v->getRoute(), '/'),
                $module->getVersions()
                    ->filter(
                        fn($version) => $version instanceof Version
                    )->toArray()
            ));
            if ($excludedVersions) {
                $pattern = "^(?!($excludedVersions))(.*)$";
            }
            $this->registerRoutes($quietedModuleUri, $moduleId, $moduleId, $pattern, isQuieted: $isQuieted);
        }
    }

    protected function registerRoutes(string $uri, string $moduleId, string $name, string $pattern = '.*', ?string $versionId = null, bool $isQuieted = false): void
    {
        $params = $versionId ? "$moduleId,$versionId" : $moduleId;
        Route::middleware([UseModule::class . ':' . $moduleId, UseVersion::class . ':' . $params])
            ->group(function () use ($uri, $name, $pattern, $isQuieted) {
                Route::get($uri, ModuleController::class)->name($name);
                if (!$isQuieted) { // regular version 
                    Route::get("{$uri}/{url}", FileController::class)->where('url', $pattern)->name("{$name}.show");
                }
                if ($isQuieted) { // the magic behind the version binded directly to the module
                    $escapedUri = preg_quote($uri, '/');
                    Route::get("{url}", function ($url) use ($uri) {
                        $url = str($url)->remove($uri)->ltrim('/')->toString();
                        return app(FileController::class)->__invoke($url, app(Markdown::class));
                    })
                        ->where('url', "^(?!{$escapedUri}$).*$")
                        ->name("{$name}.show");
                }
            });
    }
}
