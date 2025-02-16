@props(['sidebarItems' => null])
{{-- when the sidebarItems is null that mean we are in first recursive iteration so when to resolve the sidebar manager first then w use the reguralr sidebarItems   --}}
@php
    use Fluxtor\Converge\Sidebar\SidebarGroup;
    use Fluxtor\Converge\Sidebar\SidebarItem;
    $sidebarItems = $sidebarItems ?? app('converge')->getSidebarItems();
    // dd(app('converge'));
    // dd($sidebarItems);
@endphp
<ul>
    @foreach ($sidebarItems as $item)
        @if ($item instanceof SidebarItem)
            <x-converge::sidebar.item :label="$item->getLabel()" :active="ltrim(request()->getRequestUri(), '/') == $item->getUrl()" :url="$item->getUrl()" :depth="$item->getDepth()" />
        @elseif($item instanceof SidebarGroup && count($item->getItems()) >= 1)
            <x-converge::sidebar.group :groupItem="$item" />
        @endif
    @endforeach
</ul>
