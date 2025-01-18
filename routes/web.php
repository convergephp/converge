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
    $pattern = [];
    // Check if the module has versions
    if ($module->hasVersions()) {
        foreach ($module->getVersions() as $version) {
            $versionUri = $module->getRoutePath();

            if (! $version instanceof Version) {
                continue;  // Skip non-version links
            }

            if ($version->isDefault() && $version->isQuiet()) {
                continue;
            }

            // Otherwise, we modify the URI with the version route
            if (($version->isDefault() && ! $version->isQuiet()) || ! $version->isDefault()) {
                $versionUri .= '/' . $version->getRoute();
                $excludedPatterns[] = preg_quote($version->getRoute(), '/');
            }
            generateRoutes($uri, $moduleId);
        }
        // Create a combined exclusion regex or set as null
        $pattern = count($excludedPatterns) > 0
            ? '^(?!(' . implode('|', $excludedPatterns) . '))(.*)$'
            : '.*';

        continue; // explicitly go treat other module
    }
    $pattern = is_array($pattern) ? '' : $pattern;

    generateRoutes($uri, $moduleId, $pattern);
    // Register the routes for the module
}

function generateRoutes(string $uri, string $id, ?string $pattern = '.*')
{
    Route::middleware(ActivateModule::class . ':' . $id)->group(function () use ($id, $uri, $pattern) {
        Route::name($id)
            ->get($uri, ModuleController::class);

        Route::name("{$id}.show")
            ->get("{$uri}/{url}", FileController::class)
            ->where('url', $pattern);
    });
}
