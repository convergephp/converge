<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;
use Fluxtor\Converge\Facades\Converge;
use Fluxtor\Converge\Versions\Version;
use Fluxtor\Converge\Http\Middleware\ActivateModule;
use Fluxtor\Converge\Http\Controllers\FileController;
use Fluxtor\Converge\Http\Controllers\ModuleController;

foreach (Converge::getModules() as $module) {
    // dump($module);
    $uri = $module->getRoutePath();
    $moduleId = $module->getId();
    // Check if the module has versions
    if ($module->hasVersions()) {
        foreach ($module->getVersions() as $version) {
            $uri = $module->getRoutePath();

            if (!$version instanceof Version) {
                continue;  // Skip non-version links
            }
            if ($version->isDefault() && $version->isQuiet()) {
                // do nothing
            }

            // Otherwise, we modify the URI with the version route
            if (($version->isDefault() && !$version->isQuiet()) || !$version->isDefault()) {
                $uri .= '/' . $version->getRoute();  // Concatenate version to URI
            }

            generateRoutes($uri, $moduleId);
        }
        continue; // explicitly go treat other module
    }
    generateRoutes($uri, $moduleId);
    // Register the routes for the module
}

function generateRoutes(string $uri, string $id, ?string $ExcludedPatten = null)
{
    Route::middleware(ActivateModule::class . ':' . $id)->group(function () use ($id, $uri) {
        Route::name($id)
            ->get($uri, ModuleController::class);

        Route::name("{$id}.show")
            ->get("{$uri}/{url}", FileController::class)
            ->where('url', '.*');
    });
}
