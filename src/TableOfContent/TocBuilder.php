<?php

namespace Fluxtor\Converge\TableOfContent;

use DOMXPath;
use DOMDocument;

class TocBuilder
{
    protected string $content;
    protected array $items = [];

    public function generate(string $html)
    {
        $html = '<?xml encoding="UTF-8">' . $html;
        $dom = new DOMDocument;
        @$dom->loadHTML($html, LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD);
        $this->extractHeadings($dom);
    }
    public function extractHeadings(DOMDocument $dom)
    {
        $xpath = new DOMXPath($dom);
        $headings = $xpath->query('//h1 | //h2 | //h3 | //h4 | //h5 | //h6');

        $results = [];
       
         if (!$headings) {
            return $results;
        }


        foreach ($headings as $heading) {
            dump($heading->nodeName);
        }
        dd($headings);
    }
}
