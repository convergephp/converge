<?php

declare(strict_types=1);

use Fluxtor\Converge\Facades\Converge;
use Fluxtor\Converge\Http\Controllers\FileController;
use Fluxtor\Converge\Http\Controllers\ModuleController;
use Fluxtor\Converge\Http\Middleware\ActivateModule;
use Fluxtor\Converge\Versions\Version;
use Illuminate\Support\Facades\Route;

define('SLASH', '/');

foreach (Converge::getModules() as $module) {
    // dump($module);
    $uri = $module->getRoutePath();
    $moduleId = $module->getId();
    $pattern = '.*';
    $name = $moduleId;
    // Check if the module has versions
    if ($module->hasVersions()) {
        $excludUrlVersions = [];

        foreach ($module->getVersions() as $version) {
            $versionUri = $module->getRoutePath();

            if (! $version instanceof Version) {
                continue;
            }

            if ($version->isDefault() && $version->isQuiet()) {
                // redirect to the prefixed route 
                continue;
            }

            if (($version->isDefault() && ! $version->isQuiet()) || ! $version->isDefault()) {
                $versionUri .= '-' . $version->getRoute();
                $excludUrlVersions[] = preg_quote($version->getRoute(), '/');
            }
            $versionName = $name . '-' . $version->getRoute();
            generateRoutes($versionUri, $moduleId, $versionName);
        } // end of version iteration
        $pattern = count($excludUrlVersions) > 0
            ? '^(?!(' . implode('|', $excludUrlVersions) . '))(.*)$'
            : '.*';
    }

    generateRoutes(uri: $uri, id: $moduleId, name: $name, pattern: $pattern);
    // Register the routes for the module
}

function generateRoutes(string $uri, string $id, string $name, ?string $pattern = '.*')
{
    dump($pattern);
    Route::middleware(ActivateModule::class . ':' . $id)->group(function () use ($id, $name, $uri, $pattern) {
        Route::name($name)
            ->get($uri, ModuleController::class);
        

        Route::name("{$name}-show")
            ->get("{$uri}/{url}", FileController::class)
            ->where('url', $pattern);
    });
}
