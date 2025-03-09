<?php

declare(strict_types=1);

namespace Fluxtor\Converge\SearchEngine;

class Engine
{
    public function search(string $query,  bool $enableFuzzy = true): array
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
            foreach ($indexes as $indexToken => $headingIds) {

                if (
                    str_starts_with((string) $indexToken, $token) ||
                    str_ends_with((string) $indexToken, $token)
                ) {
                    foreach ($headingIds as $tokenHeadingId) {

                        if (!isset($headingsIds[$tokenHeadingId])) {
                            $headingsIds[$tokenHeadingId] = 0;
                        }

                        $headingsIds[$tokenHeadingId]++;
                    }
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

    private function isFuzzyMatch(string $indexToken, string $queryToken, int $maxDistance): bool
    {
        // Only check tokens of similar length to reduce computations
        $lengthDifference = abs(strlen($indexToken) - strlen($queryToken));
        if ($lengthDifference > $maxDistance) {
            return false;
        }

        // Calculate Levenshtein distance (number of edits needed)
        $distance = levenshtein($indexToken, $queryToken);
        return $distance <= $maxDistance;
    }

    private function addHeadingMatches(array $headingIds, array &$headingsIds): void
    {
        foreach ($headingIds as $tokenHeadingId) {
            $headingsIds[$tokenHeadingId] = ($headingsIds[$tokenHeadingId] ?? 0) + 1;
        }
    }
}
