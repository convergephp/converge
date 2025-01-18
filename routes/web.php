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
    $excludedPattern = '';
    // Check if the module has versions
    if ($module->hasVersions()) {
        foreach ($module->getVersions() as $version) {
            $uri = $module->getRoutePath();

            if (! $version instanceof Version) {
                continue;  // Skip non-version links
            }

            if ($version->isDefault() && $version->isQuiet()) {
                // do nothing
            }

            // Otherwise, we modify the URI with the version route
            if (($version->isDefault() && ! $version->isQuiet()) || ! $version->isDefault()) {
                $uri .= '/' . $version->getRoute();  // Concatenate version to URI
                $excludedPattern = '^' . preg_quote($version->getRoute(), '/') . '(/.*)?$'; // Versioned base route and optional {url} part
            }
            generateRoutes($uri, $moduleId);
        }
        // $excludedPatterns=

        continue; // explicitly go treat other module
    }
    generateRoutes($uri, $moduleId, $excludedPattern);
    // Register the routes for the module
}

function generateRoutes(string $uri, string $id, ?string $ExcludedPatten = null)
{
    Route::middleware(ActivateModule::class . ':' . $id)->group(function () use ($id, $uri) {
        Route::name($id)
            ->get($uri, ModuleController::class);

        Route::name("{$id}.show")
            ->get("{$uri}/{url}", FileController::class)
            ->where('url', $excludedPattern ?? '.*');
    });
}
