<?php

declare(strict_types=1);

use Fluxtor\Converge\Http\Controllers\FileController;
use Fluxtor\Converge\ModuleRegistry;
use Illuminate\Support\Facades\Route;

use function Fluxtor\Converge\converge;

Route::get('/docs', function () {
    // $converge = app('converge');
    // $moduleRegistry = app(ModuleRegistry::class);
    // $module = $moduleRegistry->get('global-search-modal'); // or the module you want to set
    // $converge->setActiveModule($module);
    dd(app('converge')->getActiveModule());

    return view('converge::index');
});
Route::get('/docs/{url}', [FileController::class, 'show']);
