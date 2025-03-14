<?php

declare(strict_types=1);

namespace Fluxtor\Converge\SearchEngine;

use Fluxtor\Converge\SearchEngine\Spell\JaroWinklerDistance;
use Illuminate\Support\Facades\Log;

class Engine
{
    // load indexes
    private $indexes;
    private $headings;


    public function __construct()
    {
        $this->indexes = require storage_path('converge/inverted_index.php'); // not scalable

        $this->headings = require storage_path('converge/headings.php'); // not scalable;
    }

    public function search(string $query,  bool $enableFuzzy = true): array
    {
        $processor = new QueryProcessor($query);

        $tokens = $processor->tokenize();

        if (empty($tokens)) {
            return [];
        }



        $results = [];
        $headingsIds = [];

        foreach ($tokens as $token) {
            foreach ($this->indexes as $indexToken => $headingIds) {
                if (
                    str_starts_with((string) $indexToken, $token) OR
                    str_ends_with((string) $indexToken, $token) OR
                    ($dis = (new JaroWinklerDistance)->getDistance((string)$indexToken, (string)$token)) <= 2
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
            if (isset($this->headings[$id])) {
                $results[] = $this->headings[$id];
            }
        }

        return $results;
    }

    private function addHeadingMatches(array $headingIds, array &$headingsIds): void
    {
        foreach ($headingIds as $tokenHeadingId) {
            $headingsIds[$tokenHeadingId] = ($headingsIds[$tokenHeadingId] ?? 0) + 1;
        }
    }
}
