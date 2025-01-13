<?php

namespace Fluxtor\Converge;

class ContentMap
{
    protected FilesTreeBuilder $filesTreeBuilder;

    public function __construct(FilesTreeBuilder $filesTreeBuilder)
    {
        $this->filesTreeBuilder = $filesTreeBuilder;
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
        return FilesTreeBuilder::$urlToPathMap[$url] ?? null;
    }
}
