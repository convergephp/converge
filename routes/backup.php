<?php

declare(strict_types=1);

use Converge\Facades\Converge;
use Converge\Http\Controllers\FileController;
use Converge\Http\Controllers\ModuleController;
use Converge\Http\Middleware\UseModule;
use Converge\Http\Middleware\UseVersion;
use Converge\Routing\RouteManager;
use Converge\Versions\Version;
use Illuminate\Support\Facades\Route;

// Create an instance of RouteManager
$routeManager = new RouteManager();

// Use the default prefixed strategy
$routeManager->generateRoutes();

foreach (Converge::getModules() as $module) {
    $uri = $module->getRoutePath();
    $moduleId = $module->getId();
    $pattern = '.*';
    $name = $moduleId;

    if ($module->hasVersions()) {
        foreach ($module->getVersions() as $version) {
            if (! $version instanceof Version) {
                continue;
            }

            // $versionUri = $uri;
            $versionUri = $uri.'/'.$version->getRoute();
            $versionName = $name.'.'.$version->getRoute();
            generateRoutes($versionUri, $moduleId, $versionName, versionId: $version->getRoute());
        }

        $excludedVersions = implode('|', array_map(
            fn ($v) => preg_quote($v->getRoute(), '/'),
            $module->getVersions()
                ->filter(
                    fn ($version) => $version instanceof Version
                )->toArray()
        ));
        $pattern = "^(?!($excludedVersions))(.*)$";
    }

    generateRoutes($uri, $moduleId, $name, $pattern);

}

function generateRoutes(string $uri, string $id, string $name, string $pattern = '.*', ?string $versionId = null)
{
    $params = $versionId ? "$id,$versionId" : $id;

    Route::middleware([UseModule::class.':'.$id, UseVersion::class.':'.$params])->group(function () use ($name, $uri, $pattern) {
        Route::get($uri, ModuleController::class)->name($name);

        Route::get("{$uri}/{url}", FileController::class)
            ->where('url', $pattern)
            ->name("{$name}.show");
    });
}
