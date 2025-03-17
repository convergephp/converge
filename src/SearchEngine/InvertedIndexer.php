<?php

declare(strict_types=1);

namespace Fluxtor\Converge\SearchEngine;

use Fluxtor\Converge\SearchEngine\BloomFilters\BloomFilter;
use Fluxtor\Converge\SearchEngine\Tokenizers\Tokenizer;

class InvertedIndexer
{
    protected $headings;

    protected $indexes;

    protected $bloomFilter;

    protected $distination;

    public function __construct(string $headingPath, string $distination)
    {
        $this->headings = require $headingPath;
        $this->indexes = [];
        $this->bloomFilter = new BloomFilter(1000, 4);
        $this->distination = $distination;
    }

    public function index()
    {
        foreach ($this->headings as $heading) {

            $tokens = (new Tokenizer())->tokenize($heading['title'], $this->getStopWords());

            foreach ($tokens as $token) {

                // the token is file for example
                if (! isset($this->indexes[$token])) {
                    $this->indexes[$token] = [];
                }

                if (! in_array($heading['id'], $this->indexes[$token])) {

                    $this->indexes[$token][] = $heading['id'];
                }
            }
        }
    }

    public function bloomFilterize()
    {
        foreach (array_keys($this->indexes) as $term) {
            $this->bloomFilter->add($term);
        }

        $this->bloomFilter->saveBloomFilter($this->distination);
    }

    public function tokenize(string $token)
    {
        $token = preg_replace('/[^a-z0-9]/', '', $token);

        if (
            empty($token) ||
            is_numeric($token)
        ) {
            return null;
        }

        if ($this->inStopWords($token)) {
            return null;
        }

        return $token;
    }

    public function inStopWords(string $token)
    {
        dd(config('converge.search_engine.keep_stop_words'));

        if (config('converge.search_engine.keep_stop_words')) {
            return true;
        }
        $stopWords = require __DIR__ . '/stop_words.php';

        return in_array($token, $stopWords);
    }

    public function getStopWords()
    {
        return require __DIR__ . '/stop_words.php';
    }

    public function storeInvertedIndexes()
    {
        $output = '<?php return [';

        foreach ($this->indexes as $token => $headings) {

            $output .= "\n    '$token' => [" . implode(', ', $headings) . '],';
        }

        $output .= "\n];";

        $path = $this->distination . DIRECTORY_SEPARATOR . "inverted_indexes.php";
        file_put_contents(
            $path,
            $output
        );
    }
}
