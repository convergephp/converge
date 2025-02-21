<?php

declare(strict_types=1);

namespace Fluxtor\Converge\TableOfContent;

class TableOfContent
{
    protected int $minLevel = 1;

    protected int $maxLevel = 3;

    public function maxLevel(int $maxLevel)
    {
        $this->maxLevel = $maxLevel;

        return $this;
    }

    public function minLevel(int $minLevel)
    {
        $this->minLevel = $minLevel;

        return $this;
    }

    public function getMaxLevel()
    {
        return $this->maxLevel;
    }

    public function getMinLevel()
    {
        return $this->minLevel;
    }
}
