<?php

declare(strict_types=1);

namespace Converge\SearchEngine;

use Converge\Repository;
use Converge\SearchEngine\Spell\JaroWinklerDistance;
use Exception;
use Illuminate\Config\Repository as ConfigRepository;
use Illuminate\Support\Facades\Log;

class Engine
{
    // load indexes
    protected $indexes;

    protected $headings;

    protected $headingIds = [];

    protected bool $fuzzySearchEnabled;

    protected int $resultsMaxCount;

    public function __construct(ConfigRepository $config)
    {
        $basePath = app(Repository::class)->getUsedPath();

        $this->fuzzySearchEnabled = $config->get('converge.search_engine.fuzzy_search');

        $this->resultsMaxCount = $config->get('converge.search_engine.results_max_count');

        $this->indexes = $this->loadFile($basePath.DIRECTORY_SEPARATOR.'inverted_indexes.php'); // not scalable

        $this->headings = $this->loadFile($basePath.DIRECTORY_SEPARATOR.'headings.php'); // not scalable;
    }

    public function search(string $query): array
    {
        $processor = new QueryProcessor($query);

        $tokens = $processor->tokenize();

        if (empty($tokens)) {
            return [];
        }

        $results = [];

        foreach ($tokens as $token) {
            foreach ($this->indexes as $indexToken => $headingIds) {
                $distance = (new JaroWinklerDistance)->getDistance((string) $indexToken, $token);

                $matchScore = 0;

                $matchScore = match (true) {
                    str_contains((string) $indexToken, $token) => 2,
                    $distance >= 0.9 && $this->fuzzySearchEnabled => 1,
                    default => 0
                };

                if ($matchScore) {
                    $this->addHeadingMatches($headingIds, $matchScore);
                }
            }
        }

        if (empty($this->headingIds)) {
            return [];
        }

        arsort($this->headingIds);

        foreach (array_keys($this->headingIds) as $id) {

            if (isset($this->headings[$id])) {
                $results[] = $this->headings[$id];
            }
        }

        return array_slice($results, 0, $this->resultsMaxCount);
    }

    public function loadFile(string $path)
    {
        if (! file_exists($path) || ! is_readable($path)) {
            // Optionally, log an error or handle as needed
            Log::error("File not found or not readable: {$path} did you index your search resources ?");
            throw new Exception("File not found  or not readable: {$path}");
        }

        // Load and return the file content
        return require $path;
    }

    private function addHeadingMatches(array $headingIds, int $matchScore): void
    {
        foreach ($headingIds as $tokenHeadingId) {
            if (! isset($this->headingIds[$tokenHeadingId])) {
                $this->headingIds[$tokenHeadingId] = 0;
            }

            $this->headingIds[$tokenHeadingId] += $matchScore;
        }
    }
}
