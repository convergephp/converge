<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;

Route::get('converge/docs', fn () => dd(base_path('docs')));
