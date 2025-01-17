<?php

declare(strict_types=1);

use Fluxtor\Converge\Facades\Converge;
use Fluxtor\Converge\Http\Controllers\FileController;
use Fluxtor\Converge\Http\Controllers\ModuleController;
use Fluxtor\Converge\Http\Middleware\ActivateModule;
use Fluxtor\Converge\Versions\Version;
use Illuminate\Support\Facades\Route;

foreach (Converge::getModules() as $module) {
    $moduleId = $module->getId();
    $uri = $module->getRoutePath();

    // Check if the module has versions
    if ($module->hasVersions()) {
        foreach ($module->getVersions() as $version) {
            if (!$version instanceof Version) {
                continue;  // Skip non-version links
            }

            // If the version is default and quiet, we skip it (it behaves like no version)
            if ($version->isDefault() && $version->isQuiet()) {
                continue;
            }

            // Otherwise, we modify the URI with the version route
            if (($version->isDefault() && !$version->isQuiet()) || !$version->isDefault()) {
                $uri .= '/' . $version->getRoute();  // Concatenate version to URI
            }

            // Debugging dump for versions
            // dump($version);
        }
    }

    // Register the routes for the module
    Route::middleware(ActivateModule::class . ':' . $moduleId)->group(function () use ($moduleId, $uri) {
        Route::name($moduleId)
            ->get($uri, ModuleController::class);

        Route::name("{$moduleId}.show")
            ->get("{$uri}/{url}", FileController::class)
            ->where('url', '.*');
    });
}
