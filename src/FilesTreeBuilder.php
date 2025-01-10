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
            // process file item
        }

        return [];
    }
}
