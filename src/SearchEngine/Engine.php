<?php

declare(strict_types=1);

namespace Fluxtor\Converge\SearchEngine;

use Fluxtor\Converge\SearchEngine\Spell\JaroWinklerDistance;
use Illuminate\Support\Facades\Log;

class Engine
{
    // load indexes
    protected $indexes;
    protected $headings;
    protected $headingIds = [];


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
                $distance = (new JaroWinklerDistance)->getDistance((string)$indexToken, (string)$token);
                $matchScore = 0;

                $matchScore = match (true) {
                    str_starts_with((string) $indexToken, $token) || str_ends_with((string) $indexToken, $token) => 2,
                    $distance <= 2 => 1,
                    default => 0
                };


                if ($matchScore) {

                    $this->addHeadingMatches($headingIds, $matchScore);
                    
                    // foreach ($headingIds as $tokenHeadingId) {

                    //     if (!isset($headingsIds[$tokenHeadingId])) {

                    //         $headingsIds[$tokenHeadingId] = 0;
                    //     }

                    //     $headingsIds[$tokenHeadingId] += $matchScore;
                    // }
                }
            }
        }

        if (empty($this->headingIds)) {
            return [];
        }


        arsort($this->headingIds);
        // dd($this->headingIds);
        foreach (array_keys($this->headingIds) as $id) {

            dump($id);
            if (isset($this->headings[$id])) {
                $results[] = $this->headings[$id];
            }
        }

        return $results;
    }

    private function addHeadingMatches(array $headingIds, int $matchScore): void
    {
        foreach ($headingIds as $tokenHeadingId) {
            if (!isset($this->headingIds[$tokenHeadingId])) {
                $this->headingIds[$tokenHeadingId] = 0;
            }

            $this->headingIds[$tokenHeadingId] += $matchScore; // Accumulate match scores
        }
    }
}
