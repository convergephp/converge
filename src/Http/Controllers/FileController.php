<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Http\Controllers;

use Fluxtor\Converge\ContentMap;
use Fluxtor\Converge\Documents;
use Fluxtor\Converge\Documents\Markdown;
use Fluxtor\Converge\TableOfContent\HeadingsExtractor;
use Fluxtor\Converge\TableOfContent\TableOfContent;

class FileController
{
    protected ContentMap $map;

    public function __construct(ContentMap $map)
    {
        $this->map = $map;
    }

    public function __invoke($url, Markdown $markdown)
    {
        $this->map->setUrl($url);

        $path = $this->map->getFilePathByUrl($url);

        abort_if(is_null($path), 404);

        $document = Documents\Parser::make(file_get_contents($path));

        $contents = $document->body();

        $html = $markdown->convert($contents);

        resolve(TableOfContent::class)->headings(HeadingsExtractor::make($html)->getHeadings());

        return view('converge::show', [
            'contents' => $html,
            'title' => $document->matter()['title'] ?? $this->map->getLabel(),
            'prev' => $this->map->getPrevPage(),
            'next' => $this->map->getNextPage(),
        ]);
    }
}
