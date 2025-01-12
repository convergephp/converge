@props([
    'groupItem' => null,
])

@php
    use App\Support\Packages\SidebarGroup;
    use App\Support\Packages\SidebarItem;
@endphp

<li class="mt-12 lg:mt-8">
    <h5 class="mb-3.5 font-semibold text-gray-900 lg:mb-2.5 dark:text-gray-200">
        {{ $groupItem->getLabel() }}
    </h5>
    <x-converge::sidebar.items :navItems="$groupItem->getItems()" />
</li>
