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
        $path = $root;
        $tree = self::tree($path, $root);

        return [$tree, self::$urlToPathMap];
    }

    public static function tree(string $path, string $root): array
    {
        $tree = [];
        $iterator = new RecursiveDirectoryIterator(
            $path,
            RecursiveDirectoryIterator::SKIP_DOTS
        );

        // sort files for other files rather than NFTS file system
        $entries = [];
        foreach ($iterator as $fileInfo) {
            $entries[] = $fileInfo;
        }

        // Sort entries for consistent order
        usort($entries, fn ($a, $b) => strnatcasecmp($a->getFilename(), $b->getFilename()));

        $normalize = fn ($path) => str_replace(['\\', '/'], DIRECTORY_SEPARATOR, $path);
        foreach ($entries as $fileInfo) {
            $relativePath = str_replace($root, '', $fileInfo->getRealPath());
            $relativePath = ltrim($relativePath, DIRECTORY_SEPARATOR);

            $baseNode = [
                'title' => self::formatLabel($fileInfo->getBasename()),
                'path' => $normalize($fileInfo->getRealPath()),
            ];

            $tree[] = match (true) {
                $fileInfo->isDir() => array_merge($baseNode, [
                    'type' => 'folder',
                    'children' => self::tree($fileInfo->getRealPath(), $root),
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

    private static function formatLabel(string $basename): string
    {
        $filename = pathinfo($basename, PATHINFO_FILENAME);
        // Convert filename to a user-friendly title
        $title = ucfirst(preg_replace('/^\d+-?/', '', $filename));

        return str_replace('-', ' ', $title);
    }
}
