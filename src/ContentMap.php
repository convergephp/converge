<?php

namespace Fluxtor\Converge;

class ContentMap
{
    protected FilesTreeBuilder $filesTreeBuilder;

    public function __construct(FilesTreeBuilder $filesTreeBuilder)
    {
        $this->filesTreeBuilder = $filesTreeBuilder;
        $path = base_path('docs');
        if (empty(FilesTreeBuilder::$urlToPathMap)) {
            // Set the root directory and max depth as required
            FilesTreeBuilder::build($path, 2);
        }
    }

    /**
     * Get the full file tree structure
     *
     * @param string $root
     * @param int $maxDepth
     * @return array
     */
    public function getTree(string $root, int $maxDepth = PHP_INT_MAX): array
    {
        return $this->filesTreeBuilder->build($root, $maxDepth);
    }

    /**
     * Fetch a single file using its URL.
     *
     * @param string $url
     * @return string|null
     */
    public function getFileByUrl(string $url): ?string
    {
        // dd(FilesTreeBuilder::$urlToPathMap);
        return FilesTreeBuilder::$urlToPathMap[$url] ?? null;
    }
}
