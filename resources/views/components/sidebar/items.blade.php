@props(['navItems' => null])
@php
    use Fluxtor\Converge\Sidebar\SidebarGroup;
    use Fluxtor\Converge\Sidebar\SidebarItem;
    $sidebarItems = $navItems ?? resolve('sidebar')->getItems(); // resolve only in the first level
@endphp

<ul>
    @foreach ($sidebarItems as $key => $item)
        @if ($item instanceof SidebarItem)
            <x-converge::sidebar.item 
                :label="$item->getLabel()" 
                :url="$item->getUrl()" 
                :depth="$item->getDepth()"
            />
        @elseif($item instanceof SidebarGroup && count($item->getItems()) >= 1)
            <x-converge::sidebar.group :groupItem="$item" />
        @endif
    @endforeach
</ul>
