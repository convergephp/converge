@props([
    'groupItem' => null,
])

@php
    use App\Support\Packages\NavigationGroup;
    use App\Support\Packages\NavigationItem;
@endphp

<li class="mt-12 lg:mt-8">
    <h5 class="mb-3.5 font-semibold text-gray-900 lg:mb-2.5 dark:text-gray-200">
        {{ $groupItem->getLabel() }}
    </h5>
    @foreach ($groupItem->getItems() as $item)
        @if ($item instanceof NavigationItem)
            <x-converge::sidebar.item :label="$item->getLabel()" :url="$item->getUrl()" />
        @elseif($item instanceof NavigationGroup || count($item->getItems() >= 1))
            <x-converge::sidebar.group :groupItem="$item" />
        @endif
    @endforeach
</li>
