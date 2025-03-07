<?php

namespace Fluxtor\Converge\SearchEngine;

use SplFileInfo;
use RecursiveIteratorIterator;
use RecursiveDirectoryIterator;
use Fluxtor\Converge\Documents;

class SearchManager
{
    protected array $headings = [];

    // we need to grag the headers  from the generated html to avoid an consist hashes during the renderng step
    public static function make()
    {
        $static = new static();
        return $static;
    }

    public function getAllMdFiles(string | null $path = null): void
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

        $headings = $contentParser->extractHeadings($info->getPathname());

        $this->headings = array_merge($headings, $this->headings);

        return $this;
    }

    public function storeHeadings(): void
    {
        $storagePath = storage_path('converge/headings.php');

        if (!is_dir(dirname($storagePath))) {
            mkdir(dirname($storagePath), 0777, true);
        }

        // Convert the array to PHP code
        $data = "<?php\n\nreturn " . var_export($this->headings, true) . ";\n";

        file_put_contents($storagePath, $data);
    }
}
