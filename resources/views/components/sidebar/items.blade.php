@props(['navItems' => null])
@php
    use App\Support\Packages\SidebarGroup;
    use App\Support\Packages\SidebarItem;
@endphp

<ul>
    @foreach ($navItems as $key => $item)
        @if ($item instanceof SidebarItem)
            <x-converge::sidebar.item :label="$item->getLabel()" :url="$item->getUrl()" />
        @elseif($item instanceof SidebarGroup && count($item->getItems() >= 1))
            <x-converge::sidebar.group :groupItem="$item" />
        @endif
    @endforeach
</ul>
