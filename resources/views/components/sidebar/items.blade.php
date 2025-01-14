@props(['sidebarItems' => null])
@php
    use Fluxtor\Converge\Sidebar\SidebarGroup;
    use Fluxtor\Converge\Sidebar\SidebarItem;
    $sidebarItems = (app('converge')->getSidebarItems()); 
@endphp

<ul>
    @foreach ($sidebarItems as $item)
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