<?php

declare(strict_types=1);

namespace Fluxtor\Converge\SearchEngine;

class Engine
{
    public function search($query, bool $autoComplete = false): array
    {
        $processor = new QueryProcessor($query);
        $tokens = $processor->tokenize();

        if (empty($tokens)) {
            return [];
        }

        $indexes = require storage_path('converge/inverted_index.php');

        $headings = require storage_path('converge/headings.php');

        $results = [];
        $headingsIds = [];

        
        foreach ($tokens as $token) {
            
            // we have tokens (splitted query) for each token in the query we need to look at it in the headings

            if (isset($indexes[$token])) {

                foreach ($indexes[$token] as $tokenHeadingId) {
                    if (! isset($headingsIds[$tokenHeadingId])) {
                        $headingsIds[$tokenHeadingId] = 0;

                    }
                    $headingsIds[$tokenHeadingId]++;
                }
            }
        }

        if (empty($headingsIds)) {
            return [];
        }

        arsort($headingsIds);

        foreach (array_keys($headingsIds) as $id) {
            if (isset($headings[$id])) {
                $results[] = $headings[$id];
            }
        }

        return $results;
    }
}
