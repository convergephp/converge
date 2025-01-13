<?php

declare(strict_types=1);

use Fluxtor\Converge\Http\Controllers\FileController;
use Illuminate\Support\Facades\Route;

Route::get('/docs', function () {
    return view('converge::index');
});
Route::get('/docs/{url}', [FileController::class, 'show']);
