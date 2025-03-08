<?php

namespace Fluxtor\Converge\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Fluxtor\Converge\ContentMap;
use Fluxtor\Converge\Repository;
use Illuminate\Http\JsonResponse;
use Fluxtor\Converge\SearchEngine\Engine;
use Fluxtor\Converge\Support\Highlighter;
use Illuminate\Support\Facades\Validator;

class SearchController
{
    public const CLASSES = 'text-purple-600 dark:text-purple-400 font-semibold';

    protected $map;

    public function __construct(ContentMap $map)
    {
        $this->map = $map;
    }

    public function __invoke(Request $request, Repository $repo,): JsonResponse
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

        $engine = new Engine();

        $results = $engine->search($query);

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
                'url' => route($routeName . '.show', [
                    'url' => $url,
                ])
            ];
        });

        return response()->json($results);
    }
}
