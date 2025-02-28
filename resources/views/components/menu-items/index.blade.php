@php
    $items = Fluxtor\Converge\converge()->getMenuItems();
@endphp

<div class="px-3">
    <ul class="flex items-center justify-between px-2 gap-y-2 gap-x-2 lg:gap-y-0 ">
        @foreach ($items as $item)
            @if ($item instanceof Fluxtor\Converge\MenuItems\MenuItem)
            <li>
                <x-converge::menu-items.item :$item />
            </li>
            @endif

            @if ($item instanceof Fluxtor\Converge\MenuItems\MenuItemGroup)
                <x-converge::menu-items.group :groupItem="$item" />
            @endif
        @endforeach
    </ul>
</div>
