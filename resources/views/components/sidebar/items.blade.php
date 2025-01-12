@props(['navItems' => null])
@php
    use App\Support\Packages\NavigationGroup;
    use App\Support\Packages\NavigationItem;
@endphp

<ul class="bg-gray-100 dark:bg-black">
    @foreach ($navItems as $item)
        @if ($item instanceof NavigationItem)
            <x-converge::sidebar.item :label="$item->getLabel()" :url="$item->getUrl()" />
        @elseif($item instanceof NavigationGroup || count($item->getItems() >= 1))
            <x-converge::sidebar.group :groupItem="$item" />
        @endif
    @endforeach
</ul>
