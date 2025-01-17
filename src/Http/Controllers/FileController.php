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
        $path = $this->map->getFileByUrl($url);

        $contents = file_get_contents($path);
        
        return view('converge::show', [
            'contents' => $contents,
        ]);
    }
}
