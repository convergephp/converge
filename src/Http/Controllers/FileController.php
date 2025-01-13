<?php

namespace Fluxtor\Converge\Http\Controllers;

use Fluxtor\Converge\ContentMap;
use Fluxtor\Converge\FilesTreeBuilder;

class FileController
{
    protected ContentMap $map;
    public function __construct(ContentMap $map)
    {
        $this->map = $map;
    }
    public function show($url)
    {
        // dd($url);
        $file = $this->map->getFileByUrl($url);
        // dd(file_get_contents($file)); so we're good
    }
}
