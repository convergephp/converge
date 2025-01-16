<?php

declare(strict_types=1);

use Fluxtor\Converge\Facades\Converge;
use Fluxtor\Converge\Http\Controllers\FileController;
use Fluxtor\Converge\Http\Controllers\ModuleController;
use Fluxtor\Converge\Http\Middleware\ActivateModule;
use Illuminate\Support\Facades\Route;

foreach (Converge::getModules() as $module) {
    // dump($module->getSidebarItems());
    $ModuleId = $module->getId();
    Route::name($ModuleId)
        ->middleware(ActivateModule::class.':'.$ModuleId)
        ->get($module->getRoutePath(), ModuleController::class);

    Route::name($ModuleId.'.show')
        ->middleware(ActivateModule::class.':'.$ModuleId)
        ->get($module->getRoutePath().'/{url}', FileController::class)
        ->where('url','.*');
}

// dd($modules);

Route::get('/docs', function () {

    // dd(app('converge')->getActiveModule());

    return view('converge::index');
});
Route::get('/docs/{url}', [FileController::class, 'show']);
