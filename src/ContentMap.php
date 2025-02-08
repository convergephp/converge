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

        if (empty(FilesTreeBuilder::$urlToPathMap)) {
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
    public function getFilePathByUrl(string $url): ?string
    {
        return FilesTreeBuilder::$urlToPathMap[$url] ?? null;
    }
}
