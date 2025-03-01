<?php

namespace Fluxtor\Converge\SearchEngine;

use SplFileInfo;
use GlobIterator;
use DirectoryIterator;
use RecursiveIteratorIterator;
use RecursiveDirectoryIterator;
use Fluxtor\Converge\Documents;
use Fluxtor\Converge\Actions\FrontMatterExtractor;

class SearchManager
{
    protected array $headings = [];

    // we need to grag the headers  from the generated html to avoid an consist hashes during the renderng step
    public static function make()
    {
        $static = new static();
        return $static;
    }

    public function getAllMdFiles(string | null $path = null)
    {

        $iterator = new RecursiveIteratorIterator(
            new RecursiveDirectoryIterator($path)
        );

        foreach ($iterator as $splInfo) {
            if ($splInfo->isDir()) {
                continue;
            }
            $this->handleFile($splInfo);
        }
    }

    public function handleFile(SplFileInfo $info): void
    {   

        $contents = file_get_contents($info->getPathname());

        $document = Documents\Parser::make($contents);

        $matter = $document->matter();

        $body = $document->body();

        $contentParser = new ContentsParser($body);

        $headings = $contentParser->extractHeadings();

        dd($headings);
    }
}
