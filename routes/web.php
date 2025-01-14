<?php

declare(strict_types=1);

use Fluxtor\Converge\Facades\Converge;
use Fluxtor\Converge\Http\Controllers\FileController;
use Fluxtor\Converge\Http\Controllers\ModuleController;
use Fluxtor\Converge\Http\Middleware\ActivateModule;
use Illuminate\Support\Facades\Route;

foreach (Converge::getModules() as $module) {
    Route::name($module->getId())
        // ->prefix($module->getPrefix())
        ->middleware(ActivateModule::class.':'.$module->getId())
        ->get($module->getRoutePath(), ModuleController::class);
}

// dd($modules);

Route::get('/docs', function () {

    // dd(app('converge')->getActiveModule());

    return view('converge::index');
});
Route::get('/docs/{url}', [FileController::class, 'show']);
