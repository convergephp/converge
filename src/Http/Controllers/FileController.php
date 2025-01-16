<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Http\Controllers;

use Fluxtor\Converge\ContentMap;

class FileController
{
    protected ContentMap $map;


    public function __construct(ContentMap $map)
    {
        $this->map = $map;
    }

    public function __invoke($url)
    {
        $file = $this->map->getFileByUrl($url);
        dd(file_get_contents($file));
    }
}
