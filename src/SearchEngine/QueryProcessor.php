<?php

declare(strict_types=1);

namespace Converge\SearchEngine;

use Converge\SearchEngine\Tokenizers\Tokenizer;

class QueryProcessor
{
    protected ?string $query = null;

    protected Engine $engine;

    protected $processor;

    public function __construct($query)
    {
        $this->query = $query;
    }

    public function tokenize()
    {
        // @TODO: handle the order of the query
        $tokens = (new Tokenizer())->tokenize($this->query, $this->getStopWords());

        return $tokens;
    }

    public function getStopWords()
    {
        return require __DIR__.'/stop_words.php';
    }
}
