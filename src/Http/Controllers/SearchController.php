<?php

namespace Fluxtor\Converge\Http\Controllers;

use Exception;
use Illuminate\Log\Logger;
use Illuminate\Http\Request;
use Fluxtor\Converge\ContentMap;
use Fluxtor\Converge\FilesTreeBuilder;
use Fluxtor\Converge\Repository;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use Fluxtor\Converge\SearchEngine\Engine;
use Fluxtor\Converge\Support\Highlighter;
use Illuminate\Config\Repository as ConfigRepository;
use Illuminate\Support\Facades\Validator;

class SearchController
{
    public const CLASSES = 'text-primary';

    protected $map;

    private Engine $engine;

    public function __construct(ContentMap $map, ConfigRepository $config)
    {
        $this->map = $map;
        $this->engine = new Engine($config);
    }

    public function __invoke(Request $request, Repository $repo): JsonResponse
    {


        $validator = Validator::make($request->all(), [
            'q' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $query = $request->input('q');
        if (! is_string($query)) {
            throw new Exception('Query must be a string');
        }
        $initialMemory = memory_get_usage();

        $start = microtime(true);

        $results = $this->engine->search($query);

        $finalMemory = memory_get_usage();

        $results = collect($results)->map(function ($result) use ($repo, $query) {

            $url =  $this->map->getUrlByFilePath($result['file_path']);

            $routeName = $repo->getActiveRouteName();

            $title = Highlighter::make(
                text: $result['title'],
                pattern: $query,
                classes: self::CLASSES
            );

            return [
                'title' => $title,
                'rawTitle' => $result['title'],
                'file_name' =>  FilesTreeBuilder::formatLabel(pathinfo($result['file_path'], PATHINFO_FILENAME)),
                'url' => route($routeName . '.show', [
                    'url' => $url,
                ]) . "{$result['hash']}"
            ];
        });

        $time = (microtime(true) - $start) * 1000;

        $memoryUsage = ($finalMemory - $initialMemory) / 1024; // Memory used during search in bytes

        Log::info("Search for '{$query}' took {$time} ms, using {$memoryUsage} kilo bytes of memory. Found " . count($results) . " results.");

        return response()->json($results);
    }
}
