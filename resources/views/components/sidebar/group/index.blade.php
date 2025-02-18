@props([
    'groupItem' => null,
])

<li class="mt-12 lg:mt-8">
    <h5 class="mb-3.5 flex items-center justify-start font-semibold text-gray-600 lg:mb-2.5">
        {{ \Fluxtor\Converge\intercept(\Fluxtor\Converge\Enums\Interceptor::BEFORE_SIDEBAR_GROUP_LABEL, fn() => $groupItem) }}
    
        {{ $groupItem->getLabel() }}
    
        {{ \Fluxtor\Converge\intercept(\Fluxtor\Converge\Enums\Interceptor::AFTER_SIDEBAR_GROUP_LABEL, fn() => $groupItem) }}
    </h5>

    {{ \Fluxtor\Converge\intercept(\Fluxtor\Converge\Enums\Interceptor::BEFORE_SIDEBAR_GROUP_ITEMS, fn() => $groupItem) }}
    
    <x-converge::sidebar.items :sidebarItems="$groupItem->getItems()" />
    
    {{ \Fluxtor\Converge\intercept(\Fluxtor\Converge\Enums\Interceptor::AFTER_SIDEBAR_GROUP_ITEMS, fn() => $groupItem) }}
</li>
