<?php

declare(strict_types=1);

namespace Fluxtor\Converge;

class ContentMap
{

    public function __construct(
        protected FilesTreeBuilder $filesTreeBuilder
    ) {
        $module = app('converge');
        $path = $module->getPath();
        $depth = $module->getMaxDepth();
        // dd($path, $depth);

        if (empty(FilesTreeBuilder::$urlToPathMap)) {
            // Set the root directory and max depth as required
            FilesTreeBuilder::build($path, $depth);
        }
    }

    /**
     * Get the full file tree structure
     */
    public function getTree(string $root, int $maxDepth = PHP_INT_MAX): array
    {
        return $this->filesTreeBuilder->build($root, $maxDepth);
    }

    /**
     * Fetch a single file using its URL.
     */
    public function getFileByUrl(string $url): ?string
    {
        // dd(FilesTreeBuilder::$urlToPathMap);
        return FilesTreeBuilder::$urlToPathMap[$url] ?? null;
    }
}
