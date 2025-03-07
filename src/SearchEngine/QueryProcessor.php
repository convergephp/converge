<?php

declare(strict_types=1);

namespace Fluxtor\Converge\SearchEngine;

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
        $tokens = [];
        foreach ((explode(' ', $this->query)) as $query) {

            $token = preg_replace('/[^a-z0-9]/', '', $query);

            if (empty($token) || is_numeric($token) || $this->inStopWords($token)) {
                continue;
            }

            $tokens[] = $token;
        }

        return $tokens;
    }

    public function inStopWords(string $token)
    {
        $stopWords = require __DIR__.'/stop_words.php';

        return in_array($token, $stopWords);
    }
}
