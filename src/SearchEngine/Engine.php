<?php

declare(strict_types=1);

namespace Fluxtor\Converge\SearchEngine;

use Illuminate\Support\Facades\Log;

class Engine
{
    public function search(string $query,  bool $enableFuzzy = true): array
    {
        $processor = new QueryProcessor($query);
        $tokens = $processor->tokenize();

        if (empty($tokens)) {
            return [];
        }

        $indexes = require storage_path('converge/inverted_index.php'); // not scalable

        $headings = require storage_path('converge/headings.php');

        $results = [];
        $headingsIds = [];

        foreach ($tokens as $token) {
            foreach ($indexes as $indexToken => $headingIds) {
                if (
                    str_starts_with((string) $indexToken, $token) ||
                    str_ends_with((string) $indexToken, $token) ||
                    $dis = levenshtein((string)$indexToken, (string)$token)
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

        // arsort($headingsIds);

        foreach (array_keys($headingsIds) as $id) {
            if (isset($headings[$id])) {
                $results[] = $headings[$id];
            }
        }

        return $results;
    }

    public function areClose(string $string1, string $string2, int $maxDistance): array
    {
        $distance = levenshtein($string1, $string2);
        return [$distance <= $maxDistance, $distance];
    }

    private function addHeadingMatches(array $headingIds, array &$headingsIds): void
    {
        foreach ($headingIds as $tokenHeadingId) {
            $headingsIds[$tokenHeadingId] = ($headingsIds[$tokenHeadingId] ?? 0) + 1;
        }
    }
}
