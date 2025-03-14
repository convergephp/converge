<?php

declare(strict_types=1);

namespace Fluxtor\Converge\SearchEngine;

use Fluxtor\Converge\SearchEngine\BloomFilters\BloomFilter;
use Fluxtor\Converge\SearchEngine\Tokenizers\Tokenizer;

class InvertedIndexer
{
    protected $headings;

    protected $indexes;

    public function __construct()
    {
        $this->headings = require storage_path('converge/headings.php');
        $this->indexes = [];
    }

    public function index()
    {
        foreach ($this->headings as $heading) {

            $tokens = (new Tokenizer())->tokenize($heading['title'], $this->getStopWords());
            $title = $heading['title'];
            $headingId = $heading['id'];

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
        $this->saveIndex();

        $bloomFilter = new BloomFilter(1000, 4);

        foreach (array_keys($this->indexes) as $term) {
            $bloomFilter->add($term);
        }

        $bloomFilter->saveBloomFilter();
    }

    public function tokenize(string $token)
    {
        $token = preg_replace('/[^a-z0-9]/', '', $token);

        if (empty($token) || is_numeric($token) || $this->inStopWords($token)) {
            return null;
        }

        return $token;
    }

    public function inStopWords(string $token)
    {
        $stopWords = require __DIR__.'/stop_words.php';

        return in_array($token, $stopWords);
    }

    public function getStopWords()
    {
        return require __DIR__.'/stop_words.php';
    }

    protected function saveIndex()
    {
        $output = '<?php return [';

        foreach ($this->indexes as $token => $headings) {

            $output .= "\n    '$token' => [".implode(', ', $headings).'],';
        }

        $output .= "\n];";

        file_put_contents(
            storage_path('converge/inverted_index.php'),
            $output
        );
    }
}
