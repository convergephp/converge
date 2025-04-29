<?php

declare(strict_types=1);

namespace Converge\TableOfContent;

use Illuminate\Support\Collection;

class TableOfContent
{
    protected Collection $headings;

    protected int $minLevel = 1;

    protected int $maxLevel = 3;

    public function __construct()
    {
        $this->headings = new Collection();
    }

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

    public function headings(Collection $headings)
    {
        $this->headings = $headings;
    }

    public function getMaxLevel()
    {
        return $this->maxLevel;
    }

    public function getMinLevel()
    {
        return $this->minLevel;
    }

    public function getHeadings()
    {
        return $this->headings;
    }
}
