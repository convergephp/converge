<?php

declare(strict_types=1);

use Fluxtor\Converge\Facades\Converge;
use Fluxtor\Converge\Http\Controllers\FileController;
use Fluxtor\Converge\Http\Controllers\ModuleController;
use Fluxtor\Converge\Http\Middleware\UseModule;
use Fluxtor\Converge\Http\Middleware\UseVersion;
use Fluxtor\Converge\Versions\Version;
use Illuminate\Support\Facades\Route;

foreach (Converge::getModules() as $module) {
    $uri = $module->getRoutePath();
    $moduleId = $module->getId();
    $pattern = '.*';
    $name = $moduleId;
    // Check if the module has versions
    $quietedVersion = null;
    if ($module->hasVersions()) {
        foreach ($module->getVersions() as $version) {
            $versionUri = $module->getRoutePath();

            if (! $version instanceof Version) {
                continue;
            }

            if ($version->isDefault() && $version->isQuiet()) {
                // $versionUri .= '/' . $version->getRoute();
                $quietedVersion = $version; // Mark the quiet version
                continue; // Skip creating the route for this quiet version
            }

            if (($version->isDefault() && ! $version->isQuiet()) || ! $version->isDefault()) {
                $versionUri .= '/' . $version->getRoute();
            }

            $versionName = $name . '.' . $version->getRoute();

            generateRoutes($versionUri, $moduleId, $versionName, versionId: $version->getRoute());
        } // foreach end 



        $excludedVersions = implode('|', array_map(fn($v) => preg_quote($v->getRoute(), '/'), $module->getVersions()->filter(fn($version) => $version instanceof Version)->toArray()));
        $pattern = "^(?!($excludedVersions))(.*)$";
    }

    generateRoutes(uri: $uri, id: $moduleId, name: $name, pattern: $pattern);

    // If the last version is quiet, generate the route without version part and add redirect logic
    if ($quietedVersion) {
        // Generate the non-versioned route
        generateRoutes($uri, $moduleId, $name, versionId: null);

        // Redirect quiet version index request to non-versioned route
        Route::name($name)->get("{$uri}/{$quietedVersion->getRoute()}", function () use ($uri) {
            return redirect()->route($uri);  // Redirect to the non-versioned route
        });

        // Redirect quiet version show request to non-versioned show route
        Route::name($name . '.show')->get("{$uri}/{$quietedVersion->getRoute()}/{url}", function ($url) use ($uri) {
            return redirect()->route("{$uri}.show", ['url' => $url]);  // Redirect to non-versioned show route
        });
    }
    // Register the routes for the module
}

function generateRoutes(string $uri, string $id, string $name, ?string $pattern = '.*', ?string $versionId = null)
{
    $params = ':' . $versionId ? ':' . $id . ',' . $versionId : $id;
    dump($params);
    Route::middleware([UseModule::class . ':' . $id, UseVersion::class . $params])->group(function () use ($name, $uri, $pattern) {
        Route::name($name)
            ->get($uri, ModuleController::class);

        dump($pattern);
        Route::name("{$name}.show")
            ->get("{$uri}/{url}", FileController::class)
            ->where('url', $pattern);
    });
}

// Route::get('global-search/v3.x',fn()=>'dede');

// Route::fallback(function () {
//     return redirect('/');
// });

// dd(Route::getRoutes());