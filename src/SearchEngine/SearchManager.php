<?php

declare(strict_types=1);

namespace Fluxtor\Converge\SearchEngine;

use Fluxtor\Converge\Documents;
use RecursiveDirectoryIterator;
use RecursiveIteratorIterator;
use SplFileInfo;

class SearchManager
{
    protected array $headings = [];

    protected int $id = 0;

    // we need to grag the headers  from the generated html to avoid an consist hashes during the renderng step
    public static function make()
    {
        $static = new static();

        return $static;
    }

    public function extractAllHeadingUnderThisMarkdownFiles(?string $path = null): void
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

    public function handleFile(SplFileInfo $info): self
    {

        $contents = file_get_contents($info->getPathname());

        $document = Documents\Parser::make($contents);

        $matter = $document->matter();

        $body = $document->body();

        $contentParser = new ContentsParser($body);

        $headings = $contentParser->extractHeadings($info->getPathname(), count($this->headings));

        $this->headings = array_merge($this->headings, $headings);

        return $this;
    }

    public function storeHeadings(string $distination): string
    {
        $storagePath = $distination . DIRECTORY_SEPARATOR . 'headings.php';

        if (! is_dir(dirname($storagePath))) {
            mkdir(dirname($storagePath), 0777, true);
        }

        // Convert the array to PHP code
        $data = "<?php\n\nreturn " . var_export($this->headings, true) . ";\n";

        file_put_contents($storagePath, $data);

        return $storagePath;
    }

    public function index(string $source, string $distination)
    {
        $this->extractAllHeadingUnderThisMarkdownFiles($source);

        $headingsPath = $this->storeHeadings($distination);

        $indexer = new InvertedIndexer($headingsPath, $distination);

        $indexer->index();

        $indexer->bloomFilterize();

        $indexer->storeInvertedIndexes();
    }
}
