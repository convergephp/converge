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

it('build the correct navigations items', function () use ($generatedTree) {
    // Simulate max depth 2  by truncating children beyond depth 2
    // dd($generatedTree);
    $navItems = NavigationBuilder::build($generatedTree);
    expect($navItems)->toBeInstanceOf(Collection::class);
    expect($navItems->count())->toBe(3);
    // validate the files
    $file = $navItems->get(0);
    expect($file)->toBeInstanceOf(NavigationItem::class);
    expect($file->getlabel())->toBe('Installation');
    expect($file->getpath())->toBe('docs/01-installation.md');
    expect($file->geturl())->toBe('installation');
    expect($file->getDepth())->toBe(0);

    // validate the group
    $group = $navItems->get(2);
    expect($group)->toBeInstanceOf(NavigationGroup::class);
    expect($group->getLabel())->toBe('Fields');
    expect($group->getItems())->toBeInstanceOf(Collection::class);
    expect($group->getItems()->count())->toBe(3);
    expect($group->getDepth())->toBe(0);

    // validate the group childrens
    $children = $group->getItems()->get(0);
    expect($children)->toBeInstanceOf(NavigationItem::class);
    expect($children->getlabel())->toBe('Text Input');
    expect($children->getpath())->toBe('docs/03-fields/01-text-input.md');
    expect($children->geturl())->toBe('fields/text-input');
    expect($children->getDepth())->toBe(1);

    // sub children
    $subGroup = $group->getItems()->get(2);
    expect($subGroup)->toBeInstanceOf(NavigationGroup::class);
    expect($subGroup->getItems()->get(0)->getDepth())->toBe(2);
    // enouuuuuuuuuuuuuuugh tests please, mohamed 🙂 (12/01/2025)
});

it('respect the max depth = 2 provided', function () use ($generatedTree) {
    $generatedTree[2]['children'][2]['children'] = [];
    $navItems = NavigationBuilder::build($generatedTree);
    expect($navItems)->toBeInstanceOf(Collection::class);
    expect($navItems->count())->toBe(3);
    // validate the files
    $file = $navItems->get(0);
    foreach ([$navItems->get(0), $navItems->get(1)] as $item) {
        expect($item)->toBeInstanceOf(NavigationItem::class);
        expect($item->getDepth())->toBe(0);
    }

    expect($file->getlabel())->toBe('Installation');
    expect($file->getpath())->toBe('docs/01-installation.md');
    expect($file->geturl())->toBe('installation');

    $group = $navItems->get(2);
    expect($group)->toBeInstanceOf(NavigationGroup::class);
    expect($group->getLabel())->toBe('Fields');
    expect($group->getItems())->toBeInstanceOf(Collection::class);
    expect($group->getItems()->count())
        ->toBe(2)
        ->not
        ->toBe(3); // if the children of a group empty it need to remove the group entirely
    expect($group->getDepth())->toBe(0);
    expect($group->getItems()->get(0)->getDepth())->toBe(1);
});
