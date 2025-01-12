<?php

declare(strict_types=1);

use Fluxtor\Converge\FilesTreeBuilder;

$stubs = realpath(__DIR__ . '/../stubs/docs');

// it('build the correct navigations items', function () use ($stubs) {
//     [$tree] = FilesTreeBuilder::build($stubs)[0];

//     // Normalize the paths in the expected results to use forward slashes
//     $normalize = fn($path) => str_replace(['\\', '/'], DIRECTORY_SEPARATOR, $path);

//     $expectedTree = [
//         [
//             'label' => 'Installation',
//             'path' => $normalize("{$stubs}/01-installation.md"),
//             'type' => 'file',
//             'url' => 'installation',
//         ],
//         [
//             'label' => 'Getting started',
//             'path' => $normalize("{$stubs}/02-getting-started.md"),
//             'type' => 'file',
//             'url' => 'getting-started',
//         ],
//         [
//             'label' => 'Fields',
//             'path' => $normalize("{$stubs}/03-fields"),
//             'type' => 'folder',
//             'children' => [
//                 [
//                     'label' => 'Getting started',
//                     'path' => $normalize("{$stubs}/03-fields/01-getting-started.md"),
//                     'type' => 'file',
//                     'url' => 'fields/getting-started',
//                 ],
//                 [
//                     'label' => 'Text input',
//                     'path' => $normalize("{$stubs}/03-fields/02-text-input.md"),
//                     'type' => 'file',
//                     'url' => 'fields/text-input',
//                 ],
//                 [
//                     'label' => 'Select',
//                     'path' => $normalize("{$stubs}/03-fields/03-select.md"),
//                     'type' => 'file',
//                     'url' => 'fields/select',
//                 ],
//             ],
//         ],
//         [
//             'label' => 'Layout',
//             'path' => $normalize("{$stubs}/04-layout"),
//             'type' => 'folder',
//             'children' => [
//                 [
//                     'label' => 'Getting started',
//                     'path' => $normalize("{$stubs}/04-layout/01-getting-started.md"),
//                     'type' => 'file',
//                     'url' => 'layout/getting-started',
//                 ],
//                 [
//                     'label' => 'Grid',
//                     'path' => $normalize("{$stubs}/04-layout/02-grid.md"),
//                     'type' => 'file',
//                     'url' => 'layout/grid',
//                 ],
//                 [
//                     'label' => 'Fieldset',
//                     'path' => $normalize("{$stubs}/04-layout/03-fieldset.md"),
//                     'type' => 'file',
//                     'url' => 'layout/fieldset',
//                 ],
//             ],
//         ],
//     ];

//     expect($tree)->toEqual($expectedTree);
// });

