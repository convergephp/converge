<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Http\Controllers;

use Fluxtor\Converge\ContentMap;
use Fluxtor\Converge\Documents;
use Fluxtor\Converge\Documents\Markdown;
use Fluxtor\Converge\TableOfContent\Generator;
use Fluxtor\Converge\TableOfContent\TocBuilder;

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

        abort_if(is_null($path), 404);

        $document = Documents\Parser::make(file_get_contents($path));

        $contents = $document->body();

        $html = $markdown->convert($contents);

        new TocBuilder($html);

        return view('converge::show', [
            'contents' => $html,
            'metadata' => $document->matter(),
        ]);
    }
}
