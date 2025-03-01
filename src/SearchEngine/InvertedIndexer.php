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
        
        if (empty($token) || is_numeric($token) || $this->inStopWords($token)) {
            return null;
        }


        return $token;
    }
    public function inStopWords(string $token)
    {
        $stopWords = require __DIR__ . '/stop_words.php';

        return in_array($token, $stopWords);
    }

    protected function saveIndex()
    {
        $output = '<?php return [';

        foreach ($this->indexes as $token => $headings) {

            $output .= "\n    '$token' => [" . implode(', ', $headings) . "],";
        }

        $output .= "\n];";

        file_put_contents(
            storage_path('converge/inverted_index.php'),
            $output
        );
    }
}
