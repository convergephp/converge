<?php

namespace Fluxtor\Converge\Http\Controllers;

use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SearchController
{
    public function __invoke(Request $request): JsonResponse
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

        $results = [
            [
                'url' => 'make',
                'title' => 'performence'
            ],
            [
                'url' => 'make',
                'title' => 'raw performence'
            ]
        ];

        return response()->json($results);
    }
}
