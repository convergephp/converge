<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Http\Controllers;

use Fluxtor\Converge\ContentMap;
use Fluxtor\Converge\Documents;
use Fluxtor\Converge\Documents\Markdown;

class FileController
{
    protected ContentMap $map;

    public function __construct(ContentMap $map)
    {
        $this->map = $map;
    }

    public function __invoke($url, Markdown $markdown)
    {
        $path = $this->map->getFilePathByUrl($url);

        $document = Documents\Parser::make(file_get_contents($path));

        $contents = $document->body(); // process the body 

        $html = $markdown->convert($contents);
        // highlith code blocks 



        // render declared blade components 

        return view('converge::show', [
            'contents' => $html,
            'metadata' => $document->matter()
        ]);
    }
}
