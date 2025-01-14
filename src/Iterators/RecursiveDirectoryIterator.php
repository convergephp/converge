<?php

namespace Fluxtor\Converge\Iterators;

use RecursiveDirectoryIterator as BaseRecursiveDirectoryIterator;

class RecursiveDirectoryIterator extends BaseRecursiveDirectoryIterator
{
    public function __construct(string $path, $flags = self::SKIP_DOTS)
    {
        parent::__construct($path, $flags);
    }
    public static function make(string $path)
    {
        return app(static::class, ['path' => $path]);
    }
}
