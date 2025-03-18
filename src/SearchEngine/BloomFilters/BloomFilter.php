<?php

declare(strict_types=1);

namespace Fluxtor\Converge\SearchEngine\BloomFilters;

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

    public function add(string|int $item)
    {
        for ($i = 0; $i < $this->hashCount; $i++) {
            $pos = $this->hash($item, $i);
            $this->bitArray[$pos] = 1;
        }
    }

    public function contains(string|int $item): bool
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

    public function saveBloomFilter(string $distination)
    {
        $output = '<?php return [';

        $output .= "\n".implode(', ', $this->bitArray);

        $output .= "\n];";

        $path = $distination.DIRECTORY_SEPARATOR.'bloom_filter.php';

        file_put_contents(
            $path,
            $output
        );
    }

    public function loadBloomFilter(): void
    {
        $path = storage_path('converge/bloom_filter.php');
        if (file_exists($path)) {
            $this->bitArray = require $path;
        }
    }

    private function hash(string|int $item, int $seed)
    {
        return crc32($item.$seed) % $this->size;
    }
}
