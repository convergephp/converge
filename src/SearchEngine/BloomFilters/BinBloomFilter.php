<?php

namespace Fluxtor\Converge\SearchEngine\BloomFilters;

class BinBloomFilter
{
    private string $bitArray;
    private int $size;
    private int $hashCount;

    public function __construct(int $size, int $hashCount)
    {
        $this->size = $size;
        $this->hashCount = $hashCount;
        $this->bitArray = str_repeat("\0", intdiv($size + 7, 8)); 
        // dd($this->bitArray);
    }

    private function hash(string $item, int $seed): int
    {   
        return crc32($item . $seed) % $this->size;
    }

    private function setBit(int $pos): void
    {
        $byteIndex = intdiv($pos, 8);
        $bitIndex = $pos % 8;
    
        // Convert the byte to its numeric value, perform the bitwise OR, and convert back to a character
        $byteValue = ord($this->bitArray[$byteIndex]);  // Get the byte value as an integer
        $this->bitArray[$byteIndex] = chr($byteValue | (1 << $bitIndex));  // Set the bit and store it back
    }
    

    private function getBit(int $pos): bool
    {
        $byteIndex = intdiv($pos, 8);
        $bitIndex = $pos % 8;
        return (ord($this->bitArray[$byteIndex]) & (1 << $bitIndex)) !== 0;
    }

    public function add(string $item): void
    {
        for ($i = 0; $i < $this->hashCount; $i++) {
            $pos = $this->hash($item, $i);
            $this->setBit($pos);
        }
    }

    public function contains(string $item): bool
    {
        for ($i = 0; $i < $this->hashCount; $i++) {
            $pos = $this->hash($item, $i);
            if (!$this->getBit($pos)) {
                return false;
            }
        }
        return true;
    }

    public function getBits(): string
    {
        return $this->bitArray;
    }

    public function saveBloomFilter(): void
    {
        file_put_contents(storage_path('converge/bloom_filter.bin'), $this->bitArray);
    }

    public function loadBloomFilter(): void
    {
        $path = storage_path('converge/bloom_filter.bin');
        if (file_exists($path)) {
            $this->bitArray = file_get_contents($path);

            echo 'Bloom Filter loaded, size: ' . strlen($this->bitArray) . ' bytes' . PHP_EOL;
            // Optionally print out the content in hex or base64 for easier inspection
            echo 'Hex: ' . bin2hex($this->bitArray) . PHP_EOL;

        }
    }
}
