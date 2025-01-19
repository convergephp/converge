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

    $quietedVersion = null;

    if ($module->hasVersions()) {
        foreach ($module->getVersions() as $version) {
            if (! $version instanceof Version) {
                continue;
            }

            $versionUri = $uri;
            if ($version->isDefault() && $version->isQuiet()) {
                $quietedVersion = $version;
                continue;
            }

            if (! $version->isQuiet()) {
                $versionUri .= '/' . $version->getRoute();
            }

            $versionName = $name . '.' . $version->getRoute();
            generateRoutes($versionUri, $moduleId, $versionName, versionId: $version->getRoute());
        }

        $excludedVersions = implode('|', array_map(fn($v) => preg_quote($v->getRoute(), '/'), $module->getVersions()->filter(fn($version) => $version instanceof Version)->toArray()));
        $pattern = "^(?!($excludedVersions))(.*)$";
    }

    generateRoutes($uri, $moduleId, $name, $pattern);

    if ($quietedVersion) {
        $quietVersionRoute = $quietedVersion->getRoute();

        // Redirect quiet version index to non-versioned route
        Route::get("{$uri}/{$quietVersionRoute}", function () use ($name) {
            return redirect()->route($name);
        })->name("{$name}.quieted.index");

        // Redirect quiet version show route to non-versioned show route
        Route::get("{$uri}/{$quietVersionRoute}/{url}", function ($url) use ($name) {
            return redirect()->route("{$name}.show", ['url' => $url]);
        })->name("{$name}.quieted.show");
    }
}

function generateRoutes(string $uri, string $id, string $name, string $pattern = '.*', ?string $versionId = null)
{
    $params = $versionId ? "$id,$versionId" : $id;

    Route::middleware([UseModule::class . ':' . $id, UseVersion::class . ':' . $params])->group(function () use ($name, $uri, $pattern) {
        Route::get($uri, ModuleController::class)->name($name);

        Route::get("{$uri}/{url}", FileController::class)
            ->where('url', $pattern)
            ->name("{$name}.show");
    });
}
