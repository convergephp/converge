<?php
[
    [
        "title" => "Installation",
        "path" => "{$stubPath}/01-installation.md",
        "type" => "file",
        "url" => "installation"
    ],
    [
        "title" => "Getting started",
        "path" => "{$stubPath}/02-getting-started.md",
        "type" => "file",
        "url" => "getting-started"
    ],
    [
        "title" => "Fields",
        "path" => "{$stubPath}/03-fields",
        "type" => "folder",
        "children" => [
            [
                "title" => "Getting started",
                "path" => "{$stubPath}/03-fields/01-getting-started.md",
                "type" => "file",
                "url" => "getting-started"
            ],
            [
                "title" => "Text input",
                "path" => "{$stubPath}/03-fields/02-text-input.md",
                "type" => "file",
                "url" => "fields/text-input"
            ],
            [
                "title" => "Select",
                "path" => "{$stubPath}/03-fields/03-select.md",
                "type" => "file",
                "url" => "fields/select"
            ]
        ]
    ],
    [
        "title" => "Layout",
        "path" => "{$stubPath}/04-layout",
        "type" => "folder",
        "children" => [
            [
                "title" => "Getting started",
                "path" => "{$stubPath}/04-layout/01-getting-started.md",
                "type" => "file",
                "url" => "layout/getting-started"
            ],
            [
                "title" => "Grid",
                "path" => "{$stubPath}/04-layout/02-grid.md",
                "type" => "file",
                "url" => "layout/grid"
            ],
            [
                "title" => "Fieldset",
                "path" => "{$stubPath}/04-layout/03-fieldset.md",
                "type" => "file",
                "url" => "layout/fieldset"
            ]
        ]
    ]
];

$urlToPathMap = [
    "installation" => "{$stubPath}/01-installation.md",
    "getting-started" => "{$stubPath}/02-getting-started.md",
    "fields/getting-started" => "{$stubPath}/03-fields/01-getting-started.md",
    "fields/text-input" => "{$stubPath}/03-fields/02-text-input.md",
    "fields/select" => "{$stubPath}/03-fields/03-select.md",
    "layout/getting-started" => "{$stubPath}/04-layout/01-getting-started.md",
    "layout/grid" => "{$stubPath}/04-layout/02-grid.md",
    "layout/fieldset" => "{$stubPath}/04-layout/03-fieldset.md"
];
