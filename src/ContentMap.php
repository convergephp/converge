<?php

declare(strict_types=1);

namespace Fluxtor\Converge;

class ContentMap
{
    public function __construct(
        protected FilesTreeBuilder $filesTreeBuilder,
        protected ?string $url = null
    ) {
        $module = resolve('converge');

        $path = $module->getPath();
        $depth = $module->getMaxDepth();

        if (empty(FilesTreeBuilder::$urlToPathMap)) {
            FilesTreeBuilder::build($path, $depth);
        }
    }

    public function setUrl($url)
    {
        $this->url = $url;
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

    public function getUrlByFilePath(string $path)
    {
        return array_search($path, FilesTreeBuilder::$urlToPathMap);
    }

    public function getFirstFileUrl()
    {
        return array_key_first(FilesTreeBuilder::$urlToPathMap);
    }

    public function getAllMap()
    {
        return FilesTreeBuilder::$urlToPathMap;
    }

    public function getNextPage(){
        $keys = array_keys(FilesTreeBuilder::$urlToPathMap);
    
        $currentIndex = array_search($this->url, $keys, true);
    
        if ($currentIndex === false || !isset($keys[$currentIndex + 1])) {
            return null; 
        }
    
        return $keys[$currentIndex + 1];
    }

    public function getPrevPage(){
        $keys = array_keys(FilesTreeBuilder::$urlToPathMap);
    
        $currentIndex = array_search($this->url, $keys, true);
    
        if ($currentIndex === false || !isset($keys[$currentIndex - 1])) {
            return null; 
        }
    
        return $keys[$currentIndex - 1];
    }
}
