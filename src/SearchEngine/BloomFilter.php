<?php

namespace Fluxtor\Converge\SearchEngine;

class BloomFilter
{
    private array $bitArray;
    private int $size;
    private int $hashCount;
    public function __construct($size, $hashCount)
    {
        $this->size = $size;
        $this->hashCount = $hashCount;
        $this->bitArray = array_fill(0, $hashCount, 0);
    }

    private function hash($item, $seed)
    {
        return (crc32($item . $seed) % $this->size);
    }

    public function add($item)
    {
        for ($i = 0; $i < $this->hashCount; $i++) {
            $pos = $this->hash($item, $i);
            $this->bitArray[$pos] = 1;
        }
    }

    public function contains($item)
    {
        for ($i = 0; $i < $this->hashCount; $i++) {
            $pos = $this->hash($item, $i);
            if ($this->bitArray[$pos] === 0) {
                return false;
            }
        }
        return true;
    }
}
