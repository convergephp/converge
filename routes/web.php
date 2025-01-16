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
    $moduleRoutePath = $module->getRoutePath();

    if ($module->hasVersions()) {
        foreach ($module->getVersions() as $version) {
            // we don't need version links
            if (! $version instanceof Version) {
                return;
            }

            if ($version->isDefault() && $version->isQuiet()) {
                Route::middleware(ActivateModule::class . ':' . $moduleId)->group(function () use ($moduleId, $moduleRoutePath) {
                    Route::name($moduleId)
                        ->get($moduleRoutePath, ModuleController::class);

                    Route::name("{$moduleId}.show")
                        ->get("{$moduleRoutePath}/{url}", FileController::class)
                        ->where('url', '.*');
                });
            }

            dump($version);
        }
    }

    // Route::middleware(ActivateModule::class . ':' . $moduleId)->group(function () use ($moduleId, $moduleRoutePath) {
    //     Route::name($moduleId)
    //         ->get($moduleRoutePath, ModuleController::class);

    //     Route::name("{$moduleId}.show")
    //         ->get("{$moduleRoutePath}/{url}", FileController::class)
    //         ->where('url', '.*');
    // });
}
