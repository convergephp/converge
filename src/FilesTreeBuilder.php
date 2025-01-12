<?php

declare(strict_types=1);

namespace Fluxtor\Converge;

use Exception;
use RecursiveDirectoryIterator;

final class FilesTreeBuilder
{
    /**
     * used for the single file fetching step
     *
     * @var array
     */
    public static array $urlToPathMap = [];

    /**
     * build the from the file structure provided by root param
     *
     * @param string $root
     *  @param int $maxDepth Default is PHP_INT_MAX
     * @return array
     */
    public static function build(string $root, int $maxDepth = PHP_INT_MAX): array
    {
        if (! is_dir($root)) {
            throw new Exception("Invalid directory provided: {$root}");
        }

        if ($maxDepth < 1) {
            throw new Exception("The provided maxDepth parameter must be a positive integer; received: {$maxDepth}");
        }

        $path = $root;
        $tree = self::tree($path, $root, $maxDepth);

        return [$tree, self::$urlToPathMap];
    }

    /**
     * the actual tree login
     *
     * @param string $path
     * @param string $root
     * @param integer $maxDepth
     * @param integer $currentDepth
     * @return array
     */
    public static function tree(string $path, string $root, int $maxDepth, int $currentDepth = 0): array
    {
        // Stop recursion if the maximum depth is reached
        if ($currentDepth >= $maxDepth) {
            return [];
        }

        $tree = [];
        $iterator = new RecursiveDirectoryIterator(
            $path,
            RecursiveDirectoryIterator::SKIP_DOTS
        );

        // Collect and sort directory entries for consistent order across filesystems

        $entries = [];
        foreach ($iterator as $fileInfo) {
            $entries[] = $fileInfo;
        }

        // Sort entries in natural sort for consistent order
        usort($entries, fn($a, $b) => strnatcasecmp($a->getFilename(), $b->getFilename()));

        $normalize = fn($path) => str_replace(['\\', '/'], DIRECTORY_SEPARATOR, $path);

        foreach ($entries as $fileInfo) {
            $relativePath = str_replace($root, '', $fileInfo->getRealPath());
            $relativePath = ltrim($relativePath, DIRECTORY_SEPARATOR);

            $baseNode = [
                'label' => self::formatLabel($fileInfo->getBasename()),
                'path' => $normalize($fileInfo->getRealPath()),
            ];

            $tree[] = match (true) {
                $fileInfo->isDir() => array_merge($baseNode, [
                    'type' => 'folder',
                    'children' => self::tree($fileInfo->getRealPath(), $root, $maxDepth, $currentDepth + 1),
                ]),
                $fileInfo->isFile() => array_merge($baseNode, [
                    'type' => 'file',
                    'url' => self::generateUrl($relativePath),
                ]),
                default => null
            };

            if ($fileInfo->isFile()) {
                self::$urlToPathMap[self::generateUrl($relativePath)] = $fileInfo->getRealPath();
            }
        }

        return $tree;
    }

    /**
     * generate url from the path 
     *
     * @param string $relativePath
     * @return string
     */
    public static function generateUrl(string $relativePath): string 
    {
        $path = str_replace(DIRECTORY_SEPARATOR, '/', $relativePath);

        // Split the path into segments using explode
        $segments = explode('/', $path);

        // Process each segment to remove numeric prefixes
        $segments = array_map(fn($segment) => preg_replace('/^\d+-?/', '', $segment), $segments);

        // Join the processed segments back into a path
        $url = implode('/', $segments);

        // Remove the file extension, if any
        $url = preg_replace('~\.[^\.]+$~', '', $url);

        return $url;
    }

    /**
     * generate label from the file | dir  name 
     *
     * @param string $basename
     * @return string
     */
    private static function formatLabel(string $basename): string
    {
        $filename = pathinfo($basename, PATHINFO_FILENAME);
        // Convert filename to a user-friendly label
        $label = ucfirst(preg_replace('/^\d+-?/', '', $filename));

        return str_replace('-', ' ', $label);
    }
}
