<?php

declare(strict_types=1);

namespace Fluxtor\Converge;

use Exception;
use RecursiveDirectoryIterator;

final class FilesTreeBuilder
{
    public static array $urlToPathMap = [];

    public static function build(string $root): array
    {
        if (! is_dir($root)) {
            throw new Exception("the provided path $root is not directory ");
        }
        $tree = self::tree($root);

        return [
            'tree' => $tree,
            'urlToPathMap' => self::$urlToPathMap,
        ];
    }

    public static function tree(string $path): array
    {
        $tree = [];
        $iterator = new RecursiveDirectoryIterator(
            $path,
            RecursiveDirectoryIterator::SKIP_DOTS
        );
        foreach ($iterator as $fileInfo) {
            $relativePath = str_replace($path, '', $fileInfo->getRealPath());
            $relativePath = ltrim($relativePath, DIRECTORY_SEPARATOR);
            $title = self::formatTitle($fileInfo->getBasename());

            if ($fileInfo->isDir()) {
                $tree[] = [
                    'type' => 'folder',
                    'title' => $title,
                    'path' => $fileInfo->getRealPath(),
                    'children' => self::tree($fileInfo->getRealPath()),
                ];
            } elseif ($fileInfo->isFile()) {
                $url = self::generateUrl($relativePath);

                // Add file to the tree
                $tree[] = [
                    'type' => 'file',
                    'title' => $title,
                    'path' => $fileInfo->getRealPath(),
                    'url' => $url,
                ];

                // Map the URL to the file path
                self::$urlToPathMap[$url] = $fileInfo->getRealPath();
            }
        }

        return $tree;
    }

    public static function generateUrl(string $relativePath)
    {
        $path = str_replace(DIRECTORY_SEPARATOR, '/', $relativePath);

        // Split the path into segments using explode
        $segments = explode('/', $path);

        // Process each segment to remove numeric prefixes
        $segments = array_map(fn ($segment) => preg_replace('/^\d+-?/', '', $segment), $segments);

        // Join the processed segments back into a path
        $url = implode('/', $segments);

        // Remove the file extension, if anyr
        $url = preg_replace('~\.[^\.]+$~', '', $url);

        return $url;
    }

    private static function formatTitle(string $basename): string
    {
        // Convert filename to a user-friendly title
        $title = ucfirst(preg_replace('/^\d+-?/', '', pathinfo($basename, PATHINFO_FILENAME)));
        $title = str_replace('-', ' ', $title);

        return $title;
    }
}
