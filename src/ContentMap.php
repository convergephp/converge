<?php

declare(strict_types=1);

namespace Fluxtor\Converge;

class ContentMap
{
    protected ?string $activeShowRouteName = null;

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

        $this->activeShowRouteName = resolve(Repository::class)->getActiveRouteName();
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

    public function getNextPage()
    {

        $keys = array_keys(FilesTreeBuilder::$urlToPathMap);

        $currentIndex = array_search($this->url, $keys, true);

        if ($currentIndex === false || ! isset($keys[$currentIndex + 1])) {
            return null;
        }

        $url = $keys[$currentIndex + 1];

        return $this->generateUrlAndLabel($url);
    }

    public function getLabel()
    {
        return FilesTreeBuilder::formatLabel($this->url);
    }

    public function getPrevPage()
    {

        $keys = array_keys(FilesTreeBuilder::$urlToPathMap);

        $currentIndex = array_search($this->url, $keys, true);

        if ($currentIndex === false || ! isset($keys[$currentIndex - 1])) {
            return null;
        }

        $url = $keys[$currentIndex - 1];

        return $this->generateUrlAndLabel($url);
    }

    public function generateUrlAndLabel($url)
    {
        return (object) [
            'label' => FilesTreeBuilder::formatLabel($url),
            'url' => route($this->activeShowRouteName.'.show', [
                'url' => $url,
            ]),
        ];
    }

    public function getCurrentIndex()
    {
        $keys = array_keys(FilesTreeBuilder::$urlToPathMap);

        return array_search($this->url, $keys, true);
    }
}
