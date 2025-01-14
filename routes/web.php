<?php

declare(strict_types=1);

use Fluxtor\Converge\Http\Controllers\FileController;
use Illuminate\Support\Facades\Route;

use function Fluxtor\Converge\converge;

Route::get('/docs', function () {
    dd(app('converge')->getActiveModule());
    return view('converge::index');
});
Route::get('/docs/{url}', [FileController::class, 'show']);
