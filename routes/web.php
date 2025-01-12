<?php

declare(strict_types=1);

use Fluxtor\Converge\FilesTreeBuilder;
use Fluxtor\Converge\Sidebar\SidebarBuilder;
use Illuminate\Support\Facades\Route;

Route::get('converge/docs', function () {

    $path = base_path('docs');
    $tree = FilesTreeBuilder::build($path, 2);
    $items = SidebarBuilder::build($tree[0]);

    // dd($items);
    return view('converge::index', [
        'sidebarItems' => $items,
    ]);
});
