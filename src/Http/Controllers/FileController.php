<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Http\Controllers;

use Fluxtor\Converge\ContentMap;
use Fluxtor\Converge\Documents;
use Fluxtor\Converge\Documents\Markdown;
use Fluxtor\Converge\Support\Metadata;
use Fluxtor\Converge\TableOfContent\HeadingsExtractor;
use Fluxtor\Converge\TableOfContent\TableOfContent;

class FileController
{
    protected ContentMap $map;

    /**
     * Inject the ContentMap dependency.
     */
    public function __construct(ContentMap $map)
    {
        $this->map = $map;
    }

    /**
     * Handle a request to display a markdown-based documentation page.
     *
     * @param string $url        The URL slug that maps to a documentation file.
     * @param Markdown $markdown The Markdown converter service.
     *
     * @return \Illuminate\View\View
     */
    public function __invoke($url, Markdown $markdown)
    {
        // Set the current URL in the content map to determine current page context
        $this->map->setUrl($url);

        // Resolve the actual file path for the given URL
        $path = $this->map->getFilePathByUrl($url);

        // If the file doesn't exist, abort with a 404
        abort_if(is_null($path), 404);

        // Parse the Markdown file including front matter and content body
        $document = Documents\Parser::make(file_get_contents($path));

        // Extract just the markdown content from the document
        $contents = $document->body();

        // Convert markdown to HTML
        $html = $markdown->convert($contents);
        
        // Generate table of contents from the HTML content
        resolve(TableOfContent::class)->headings(
            HeadingsExtractor::make($html)->getHeadings()
        );

        // Set metadata using the front matter or fallback to the label from the content map
        resolve(Metadata::class)->frontMatter(
            $document->matter() ?? ['title' => $this->map->getLabel()]
        );

        return view('converge::show', [
            'contents' => $html, 
            'metadata' => $document->matter() ?? ['title' => $this->map->getLabel()], // front matter
            'prev' => $this->map->getPrevPage(), 
            'next' => $this->map->getNextPage(), 
        ]);
    }
}
