<?php

declare(strict_types=1);

use Fluxtor\Converge\FilesTreeBuilder;
use Fluxtor\Converge\Navigation\NavigationBuilder;
use Illuminate\Support\Facades\Route;

Route::get('converge/docs', function (){

    $path = base_path('docs');
    $tree=FilesTreeBuilder::build($path);
    $items = NavigationBuilder::build($tree[0]);
    dd($items);
});
