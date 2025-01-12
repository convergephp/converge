<?php

declare(strict_types=1);

use Fluxtor\Converge\Navigation\NavigationBuilder;
use Fluxtor\Converge\Navigation\NavigationGroup;
use Fluxtor\Converge\Navigation\NavigationItem;
use Illuminate\Support\Collection;

$stubs = realpath(__DIR__.'/../stubs/docs');
/**
 * similate the generated tree from the Fluxtor\Converge\FilesTreeBuilder class
 */
$generatedTree = [
    [
        'label' => 'Installation',
        'path' => 'docs/01-installation.md',
        'type' => 'file',
        'url' => 'installation',
    ],
    [
        'label' => 'Getting started',
        'path' => 'docs/02-getting-started.md',
        'type' => 'file',
        'url' => 'getting-started',
    ],
    [
        'label' => 'Fields',
        'type' => 'folder',
        'children' => [
            [
                'label' => 'Text Input',
                'path' => 'docs/03-fields/01-text-input.md',
                'type' => 'file',
                'url' => 'fields/text-input',
            ],
            [
                'label' => 'Select',
                'path' => 'docs/03-fields/02-select.md',
                'type' => 'file',
                'url' => 'fields/select',
            ],
            [
                'label' => 'Sub Fields',
                'type' => 'folder',
                'children' => [
                    [
                        'label' => 'Text Input',
                        'path' => 'docs/03-fields/01-sub-fields/01-text-input.md',
                        'type' => 'file',
                        'url' => 'fields/sub-fields/text-input',
                    ],
                    [
                        'label' => 'Select',
                        'path' => 'docs/03-fields/01-sub-fields/02-select.md',
                        'type' => 'file',
                        'url' => 'fields/sub-fields/select',
                    ],
                ],
            ],
        ],

    ],
];

it('builds the correct navigation items', function () use ($generatedTree) {
    $navItems = NavigationBuilder::build($generatedTree);

    expect($navItems)->toBeInstanceOf(Collection::class);
    expect($navItems->count())->toBe(3);

    // Validate root files
    foreach ([$navItems->get(0), $navItems->get(1)] as $index => $item) {
        expect($item)->toBeInstanceOf(NavigationItem::class);
        expect($item->getDepth())->toBe(0);
        expect($item->getLabel())->toBe($index === 0 ? 'Installation' : 'Getting started');
        expect($item->getPath())->toBe($index === 0 ? 'docs/01-installation.md' : 'docs/02-getting-started.md');
        expect($item->getUrl())->toBe($index === 0 ? 'installation' : 'getting-started');
    }

    // Validate group (Fields)
    $group = $navItems->get(2);
    expect($group)->toBeInstanceOf(NavigationGroup::class);
    expect($group->getLabel())->toBe('Fields');
    expect($group->getDepth())->toBe(0);
    expect($group->getItems())->toBeInstanceOf(Collection::class);
    expect($group->getItems()->count())->toBe(3);

    // Validate group's children
    $child = $group->getItems()->get(0);
    expect($child)->toBeInstanceOf(NavigationItem::class);
    expect($child->getLabel())->toBe('Text Input');
    expect($child->getPath())->toBe('docs/03-fields/01-text-input.md');
    expect($child->getUrl())->toBe('fields/text-input');
    expect($child->getDepth())->toBe(1);

    // Validate subgroup (Sub Fields)
    $subGroup = $group->getItems()->get(2);
    expect($subGroup)->toBeInstanceOf(NavigationGroup::class);
    expect($subGroup->getItems()->count())->toBe(2);
    expect($subGroup->getItems()->get(0)->getDepth())->toBe(2);
});

it('respects the max depth = 2 provided', function () use ($generatedTree) {
    $generatedTree[2]['children'][2]['children'] = []; // Simulate truncation of children beyond depth 2
    $navItems = NavigationBuilder::build($generatedTree);

    expect($navItems)->toBeInstanceOf(Collection::class);
    expect($navItems->count())->toBe(3);

    // Validate root files
    foreach ([$navItems->get(0), $navItems->get(1)] as $item) {
        expect($item)->toBeInstanceOf(NavigationItem::class);
        expect($item->getDepth())->toBe(0);
    }

    // Validate group (Fields)
    $group = $navItems->get(2);
    expect($group)->toBeInstanceOf(NavigationGroup::class);
    expect($group->getLabel())->toBe('Fields');
    expect($group->getItems())->toBeInstanceOf(Collection::class);

    // Validate truncation of children
    expect($group->getItems()->count())
        ->toBe(2)
        ->not
        ->toBe(3); // Ensure the subgroup (Sub Fields) was removed
    expect($group->getDepth())->toBe(0);

    // Validate remaining group's children
    $child = $group->getItems()->get(0);
    expect($child)->toBeInstanceOf(NavigationItem::class);
    expect($child->getDepth())->toBe(1);
});
