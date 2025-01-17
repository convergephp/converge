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
        $path = $this->map->getFilePathByUrl($url);

        $document = Documents\Parser::make(file_get_contents($path));

        $contents = $document->body(); // process the body 

        // highlith code blocks 
        // render declared blade components 
         
        return view('converge::show', [
            'contents' => $contents,
            'metadata' => $document->matter()
        ]);
    }
}
