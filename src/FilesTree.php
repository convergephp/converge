<?php

namespace Fluxtor\Converge;

use RecursiveDirectoryIterator;

class FilesTree
{
    public static array $urlPathMapping = [];
    public function build(string $root): array
    {
        if (!is_dir($root)) {
            throw new \Exception("the provided path $root is not directory ");
        }
        $tree = self::tree($root);
        return [
            'tree' => $tree,
            'urlPathMapping' => self::$urlPathMapping,
        ];
    }
    public static function tree(string $path): array
    {
        $tree = [];
        $iterator = new RecursiveDirectoryIterator(
            $path,
            RecursiveDirectoryIterator::SKIP_DOTS
        );
        foreach($iterator as $fileInfo){
            // process file item
        }
        return [];
    }
}
