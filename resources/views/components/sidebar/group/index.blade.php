@props([
    'groupItem' => null,
])

<li class="mt-12 lg:mt-8">
    <h5 class="mb-3.5 font-semibold text-gray-600 lg:mb-2.5 ">
        {{ $groupItem->getLabel() }}
    </h5>
    <x-converge::sidebar.items :sidebarItems="$groupItem->getItems()" />
</li>
