<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Http\Controllers;

use Fluxtor\Converge\ContentMap;
use Fluxtor\Converge\Support\DocumentParser;

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
        $document = DocumentParser::make($contents);
        return view('converge::show', [
            'contents' => $document->body(),
            'metadata' => $document->matter()
        ]);
    }
}
