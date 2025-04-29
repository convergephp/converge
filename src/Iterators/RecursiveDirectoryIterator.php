<?php

declare(strict_types=1);

namespace Converge\Iterators;

use Converge\Iterators\Filters\FilesFilterIterator;
use RecursiveDirectoryIterator as BaseRecursiveDirectoryIterator;
use RecursiveIterator;

class RecursiveDirectoryIterator extends BaseRecursiveDirectoryIterator
{
    public function __construct(string $path, int $flags = 0)
    {
        $flags |= self::SKIP_DOTS;
        parent::__construct($path, $flags);
    }

    public static function make(string $path, int $flags = 0): RecursiveIterator
    {
        return new FilesFilterIterator(resolve(static::class, [
            'path' => $path,
            'flags' => $flags,
        ]));
    }
}
