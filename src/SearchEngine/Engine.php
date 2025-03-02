<?php

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
            if (isset($indexes[$token])) {
                foreach ($indexes[$token] as $id) {
                    if (!isset($headingsIds[$id])) {
                        $headingsIds[$id] = 0;
                    }
                    $headingsIds[$id]++;
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
