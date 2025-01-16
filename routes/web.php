<?php

declare(strict_types=1);

use Fluxtor\Converge\Facades\Converge;
use Fluxtor\Converge\Http\Controllers\FileController;
use Fluxtor\Converge\Http\Controllers\ModuleController;
use Fluxtor\Converge\Http\Middleware\ActivateModule;
use Illuminate\Support\Facades\Route;

foreach (Converge::getModules() as $module) {
    $moduleId = $module->getId();
    $moduleRoutePath = $module->getRoutePath();

    Route::middleware(ActivateModule::class . ':' . $moduleId)->group(function () use ($moduleId, $moduleRoutePath) {
        Route::name($moduleId)
            ->get($moduleRoutePath, ModuleController::class);

        Route::name("{$moduleId}.show")
            ->get("{$moduleRoutePath}/{url}", FileController::class)
            ->where('url', '.*');
    });
}
