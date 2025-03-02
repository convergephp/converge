<?php

namespace Fluxtor\Converge\SearchEngine;

class Engine
{
    public function search($query, bool $autoComplete = false)
    {

        $processor = new QueryProcessor($query); // stemm normalize the query and so on....

        $tokens = $processor->tokenize();

        $results = [];

        $indexes = require storage_path('converge/inverted_index.php');

        $headings = require storage_path('converge/headings.php');


        $headingsIds = [];
        foreach ($tokens as $token) {
            foreach (array_keys($indexes) as $index) {
                if ($index === $token) {
                    $headingsIds[] = $indexes[$index];
                }
            }
        }


        foreach ($headingsIds as $ids) {
            foreach ($ids as $id) {
                $results[] = $headings[$id];
            }
        }
        
        return $results;
    }
}
