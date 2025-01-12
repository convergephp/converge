<?php

declare(strict_types=1);

use Fluxtor\Converge\FilesTreeBuilder;

$stubs = realpath(__DIR__.'/../stubs/docs');

it('build the correct file tree', function () use ($stubs) {
    [$tree, $map] = FilesTreeBuilder::build($stubs);

    // Normalize the paths in the expected results to use forward slashes
    $normalize = fn ($path) => str_replace(['\\', '/'], DIRECTORY_SEPARATOR, $path);

    $expectedTree = [
        [
            'label' => 'Installation',
            'path' => $normalize("{$stubs}/01-installation.md"),
            'type' => 'file',
            'url' => 'installation',
        ],
        [
            'label' => 'Getting started',
            'path' => $normalize("{$stubs}/02-getting-started.md"),
            'type' => 'file',
            'url' => 'getting-started',
        ],
        [
            'label' => 'Fields',
            'path' => $normalize("{$stubs}/03-fields"),
            'type' => 'folder',
            'children' => [
                [
                    'label' => 'Getting started',
                    'path' => $normalize("{$stubs}/03-fields/01-getting-started.md"),
                    'type' => 'file',
                    'url' => 'fields/getting-started',
                ],
                [
                    'label' => 'Text input',
                    'path' => $normalize("{$stubs}/03-fields/02-text-input.md"),
                    'type' => 'file',
                    'url' => 'fields/text-input',
                ],
                [
                    'label' => 'Select',
                    'path' => $normalize("{$stubs}/03-fields/03-select.md"),
                    'type' => 'file',
                    'url' => 'fields/select',
                ],
            ],
        ],
        [
            'label' => 'Layout',
            'path' => $normalize("{$stubs}/04-layout"),
            'type' => 'folder',
            'children' => [
                [
                    'label' => 'Getting started',
                    'path' => $normalize("{$stubs}/04-layout/01-getting-started.md"),
                    'type' => 'file',
                    'url' => 'layout/getting-started',
                ],
                [
                    'label' => 'Grid',
                    'path' => $normalize("{$stubs}/04-layout/02-grid.md"),
                    'type' => 'file',
                    'url' => 'layout/grid',
                ],
                [
                    'label' => 'Fieldset',
                    'path' => $normalize("{$stubs}/04-layout/03-fieldset.md"),
                    'type' => 'file',
                    'url' => 'layout/fieldset',
                ],
            ],
        ],
    ];

    $expectedMap = [
        'installation' => $normalize("{$stubs}/01-installation.md"),
        'getting-started' => $normalize("{$stubs}/02-getting-started.md"),
        'fields/getting-started' => $normalize("{$stubs}/03-fields/01-getting-started.md"),
        'fields/text-input' => $normalize("{$stubs}/03-fields/02-text-input.md"),
        'fields/select' => $normalize("{$stubs}/03-fields/03-select.md"),
        'layout/getting-started' => $normalize("{$stubs}/04-layout/01-getting-started.md"),
        'layout/grid' => $normalize("{$stubs}/04-layout/02-grid.md"),
        'layout/fieldset' => $normalize("{$stubs}/04-layout/03-fieldset.md"),
    ];

    expect($tree)->toEqual($expectedTree);
    expect($map)->toEqual($expectedMap);
});

it('generates the correct label from the given path', function () {
    $label1 = FilesTreeBuilder::formatLabel('03-label');
    $label2 = FilesTreeBuilder::formatLabel('0234label');
    $label3 = FilesTreeBuilder::formatLabel('0234label/234label');
    $label4 = FilesTreeBuilder::formatLabel('13-section/14-file/10-subfile');
    $label5 = FilesTreeBuilder::formatLabel('13section/14file/10subfile.md');

    expect($label1)->toBe('Label');
    expect($label2)->toBe('Label');
    expect($label3)->toBe('Label');
    expect($label4)->toBe('Subfile');
    expect($label5)->toBe('Subfile');
});

it('generates the correct url from the given path', function () {
    $url1 = FilesTreeBuilder::generateUrl('03-name');
    $url2 = FilesTreeBuilder::generateUrl('0234name');
    $url3 = FilesTreeBuilder::generateUrl('03-section/12-file');
    $url4 = FilesTreeBuilder::generateUrl('03234section/13232file');
    $url5 = FilesTreeBuilder::generateUrl('13-section/14-file/10-subfile');
    $url6 = FilesTreeBuilder::generateUrl('13section/14file/10subfile');

    expect($url1)->toBe('name');
    expect($url2)->toBe('name');
    expect($url3)->toBe('section/file');
    expect($url4)->toBe('section/file');
    expect($url5)->toBe('section/file/subfile');
    expect($url6)->toBe('section/file/subfile');
});

it('allows custom label generator action',function(){

})->todo();

it('allows custom url generator action',function(){

})->todo();

it('allows ignore pattern filter action',function(){

})->todo();

it('handle deeply nested structure',function(){

})->todo();

it('handles multiple root directories',function(){

})->todo();

it('throws an exception for invalid directory',function(){

})->todo();

it('excludes empty directories',function(){

})->todo();

it('detects and prevents circular references',function(){

})->todo();







