<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Http\Controllers;

use Document\Parser;
use Fluxtor\Converge\ContentMap;
use Fluxtor\Converge\Documents;
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

        $document = Documents\Parser::make($contents);

        return view('converge::show', [
            'contents' => $document->body(),
            'metadata' => $document->matter()
        ]);
    }
}
