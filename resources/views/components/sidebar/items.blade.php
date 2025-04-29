@props(['sidebarItems' => null])
<?php
use Converge\Sidebar\SidebarGroup;
use Converge\Sidebar\SidebarItem;
use function Converge\converge;
/*
 * when the sidebarItems is null that mean we are in first recursive
 * iteration so when to resolve the sidebar manager first then we
 * use the reguralr sidebarItems
 */

$sidebarItems = $sidebarItems ?? converge()->getSidebarItems();
$canCollapsedGroupes = converge()->getTheme()->isCollapsedGroupes();

?>
<ul class="flex flex-col gap-2">
    @foreach ($sidebarItems as $item)
        @if ($item instanceof SidebarItem)
            <x-converge::sidebar.item :$item />
        @elseif($item instanceof SidebarGroup && count($item->getItems()) >= 1)
            <x-converge::sidebar.group :groupItem="$item"
                                       :$canCollapsedGroupes />
        @endif
    @endforeach
</ul>
