<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Iterators;

use RecursiveDirectoryIterator as BaseRecursiveDirectoryIterator;

class RecursiveDirectoryIterator extends BaseRecursiveDirectoryIterator
{
    public function __construct(string $path, int $flags = 0)
    {
        $flags |= self::SKIP_DOTS;
        parent::__construct($path, $flags);
    }

    public static function make(string $path, int $flags = 0): static
    {
        return resolve(static::class, [
            'path' => $path,
            'flags' => $flags,
        ]);
    }
}
