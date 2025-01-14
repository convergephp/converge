<?php

declare(strict_types=1);

use Fluxtor\Converge\ModuleRegistry;
use Illuminate\Support\Facades\Route;
use Fluxtor\Converge\Facades\Converge;
use Fluxtor\Converge\Http\Middleware\ActivateModule;
use Fluxtor\Converge\Http\Controllers\FileController;
use Fluxtor\Converge\Http\Controllers\ModuleController;


foreach (Converge::getModules() as $module) {
    Route::name($module->getId())
        ->middleware(ActivateModule::class . ':' . $module->getId())
        ->get($module->getRoutePath(), ModuleController::class);
}

// dd($modules);

Route::get('/docs', function () {

    // dd(app('converge')->getActiveModule());

    return view('converge::index');
});
Route::get('/docs/{url}', [FileController::class, 'show']);
