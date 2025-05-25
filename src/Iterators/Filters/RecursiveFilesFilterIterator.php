<?php

declare(strict_types=1);

namespace Converge\Iterators\Filters;

use RecursiveFilterIterator;
use SplFileInfo;

class FilesFilterIterator extends RecursiveFilterIterator
{
    public function accept(): bool
    {
        $vcs = [
            '.git',
            '.svn',
            '.hg',
            '.bzr',
        ];

        /** @var SplFileInfo */
        $file = $this->current();

        if ($file->isDir() && in_array($file->getFilename(), $vcs)) {
            return false;
        }

        if ($file->isFile() && ! in_array($file->getExtension(), ['md', 'mdx'])) {
            return false;
        }

        return true;
    }
}
