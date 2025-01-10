<?php

use Fluxtor\Converge\FilesTreeBuilder;


$stubs = realpath(__DIR__ . '/../stubs/docs');


[$tree, $map] = FilesTreeBuilder::build($stubs);

$expectedTree = [
    [
        "title" => "Installation",
        "path" => "{$stubs}/01-installation.md",
        "type" => "file",
        "url" => "installation"
    ],
    [
        "title" => "Getting started",
        "path" => "{$stubs}/02-getting-started.md",
        "type" => "file",
        "url" => "getting-started"
    ],
    [
        "title" => "Fields",
        "path" => "{$stubs}/03-fields",
        "type" => "folder",
        "children" => [
            [
                "title" => "Getting started",
                "path" => "{$stubs}/03-fields/01-getting-started.md",
                "type" => "file",
                "url" => "getting-started"
            ],
            [
                "title" => "Text input",
                "path" => "{$stubs}/03-fields/02-text-input.md",
                "type" => "file",
                "url" => "fields/text-input"
            ],
            [
                "title" => "Select",
                "path" => "{$stubs}/03-fields/03-select.md",
                "type" => "file",
                "url" => "fields/select"
            ]
        ]
    ],
    [
        "title" => "Layout",
        "path" => "{$stubs}/04-layout",
        "type" => "folder",
        "children" => [
            [
                "title" => "Getting started",
                "path" => "{$stubs}/04-layout/01-getting-started.md",
                "type" => "file",
                "url" => "layout/getting-started"
            ],
            [
                "title" => "Grid",
                "path" => "{$stubs}/04-layout/02-grid.md",
                "type" => "file",
                "url" => "layout/grid"
            ],
            [
                "title" => "Fieldset",
                "path" => "{$stubs}/04-layout/03-fieldset.md",
                "type" => "file",
                "url" => "layout/fieldset"
            ]
        ]
    ]
];
$expectedMap = [
    "installation" => "{$stubs}/01-installation.md",
    "getting-started" => "{$stubs}/02-getting-started.md",
    "fields/getting-started" => "{$stubs}/03-fields/01-getting-started.md",
    "fields/text-input" => "{$stubs}/03-fields/02-text-input.md",
    "fields/select" => "{$stubs}/03-fields/03-select.md",
    "layout/getting-started" => "{$stubs}/04-layout/01-getting-started.md",
    "layout/grid" => "{$stubs}/04-layout/02-grid.md",
    "layout/fieldset" => "{$stubs}/04-layout/03-fieldset.md"
];

dd($tree);
