<?php

use Fluxtor\Converge\FilesTreeBuilder;

$stubs = realpath(__DIR__ . '/../stubs/docs');

it('build the correct file tree', function () use ($stubs) {
    [$tree, $map] = FilesTreeBuilder::build($stubs);

    // Normalize the paths in the expected results to use forward slashes
    $normalize = fn($path) => str_replace(['\\', '/'], DIRECTORY_SEPARATOR, $path);

    $expectedTree = [
        [
            "title" => "Installation",
            "path" => $normalize("{$stubs}/01-installation.md"),
            "type" => "file",
            "url" => "installation"
        ],
        [
            "title" => "Getting started",
            "path" => $normalize("{$stubs}/02-getting-started.md"),
            "type" => "file",
            "url" => "getting-started"
        ],
        [
            "title" => "Fields",
            "path" => $normalize("{$stubs}/03-fields"),
            "type" => "folder",
            "children" => [
                [
                    "title" => "Getting started",
                    "path" => $normalize("{$stubs}/03-fields/01-getting-started.md"),
                    "type" => "file",
                    "url" => "getting-started"
                ],
                [
                    "title" => "Text input",
                    "path" => $normalize("{$stubs}/03-fields/02-text-input.md"),
                    "type" => "file",
                    "url" => "fields/text-input"
                ],
                [
                    "title" => "Select",
                    "path" => $normalize("{$stubs}/03-fields/03-select.md"),
                    "type" => "file",
                    "url" => "fields/select"
                ]
            ]
        ],
        [
            "title" => "Layout",
            "path" => $normalize("{$stubs}/04-layout"),
            "type" => "folder",
            "children" => [
                [
                    "title" => "Getting started",
                    "path" => $normalize("{$stubs}/04-layout/01-getting-started.md"),
                    "type" => "file",
                    "url" => "layout/getting-started"
                ],
                [
                    "title" => "Grid",
                    "path" => $normalize("{$stubs}/04-layout/02-grid.md"),
                    "type" => "file",
                    "url" => "layout/grid"
                ],
                [
                    "title" => "Fieldset",
                    "path" => $normalize("{$stubs}/04-layout/03-fieldset.md"),
                    "type" => "file",
                    "url" => "layout/fieldset"
                ]
            ]
        ]
    ];

    $expectedMap = [
        "installation" => $normalize("{$stubs}/01-installation.md"),
        "getting-started" => $normalize("{$stubs}/02-getting-started.md"),
        "fields/getting-started" => $normalize("{$stubs}/03-fields/01-getting-started.md"),
        "fields/text-input" => $normalize("{$stubs}/03-fields/02-text-input.md"),
        "fields/select" => $normalize("{$stubs}/03-fields/03-select.md"),
        "layout/getting-started" => $normalize("{$stubs}/04-layout/01-getting-started.md"),
        "layout/grid" => $normalize("{$stubs}/04-layout/02-grid.md"),
        "layout/fieldset" => $normalize("{$stubs}/04-layout/03-fieldset.md")
    ];

    expect($tree)->toEqual($expectedTree);
    // expect($map)->toEqual($expectedMap);
});
