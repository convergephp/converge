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
        $this->bitArray = array_fill(0, $size, 0);
    }

    private function hash(string $item, int $seed)
    {
        return (crc32($item . $seed) % $this->size);
    }

    public function add(string $item)
    {
        for ($i = 0; $i < $this->hashCount; $i++) {
            $pos = $this->hash($item, $i);
            $this->bitArray[$pos] = 1;
        }
    }

    public function contains(string $item): bool
    {
        for ($i = 0; $i < $this->hashCount; $i++) {
            $pos = $this->hash($item, $i);
            if ($this->bitArray[$pos] === 0) {
                return false;
            }
        }
        return true;
    }

    public function getBits()
    {
        return $this->bitArray;
    }

    public function saveBloomFilter()
    {
        $output = '<?php return [';


        $output .= "\n" . implode(', ', $this->bitArray);

        $output .= "\n];";

        file_put_contents(
            storage_path('converge/bloom_filter.php'),
            $output
        );
    }
}
