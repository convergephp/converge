<?php

namespace Fluxtor\Converge\SearchEngine;

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
            $tokens = explode(' ', strtolower($heading['title']));

            foreach ($tokens as $token) {
                $token = $this->tokenize($token);

                if ($token === null) {
                    continue;
                }

                if (!isset($this->indexes[$token])) {
                    $this->indexes[$token] = [];
                }

                if (!in_array($heading['id'], $this->indexes[$token])) {
                    $this->indexes[$token][] = $heading['id']; // Add unique heading ID
                }
            }
        }
        $this->saveIndex();
    }


    public function tokenize(string $token)
    {
        $token = preg_replace('/[^a-z0-9]/', '', $token);

        if (empty($token) || $this->inStopWords($token)) {
            return null;
        }

        return $token;
    }
    public function inStopWords(string $token)
    {
        $stopWords = require __DIR__ . '/stop_words.php';

        return isset($stopWords[$token]);
    }

    public function getStopWords(): array
    {
        return [
            'the',
            'is',
            'in',
            'and',
            'of',
            'a',
            'to',
            'for',
            'on',
            'at',
            'by',
            'with',
            'as',
            'an',
            'be',
            'this',
            'that',
            'it',
            'or',
            'from',
            'was',
            'were',
            'are',
            'will',
            'we',
            'you',
            'they',
            'i',
            'he',
            'she',
            'has',
            'had',
            'have',
            'having',
            'not',
            'be',
            'has',
            'how',
            'what',
            'why',
            'where',
            'when',
            'which',
            'who',
            'whose',
            'about',
            'through',
            'during',
            'before',
            'after',
            'under',
            'above'
        ];
    }

    protected function saveIndex()
    {
        // Save the index to a PHP file that returns the index array
        file_put_contents(storage_path('converge/inverted_index.php'), '<?php return ' . var_export($this->indexes, true) . ';');
    }
}
