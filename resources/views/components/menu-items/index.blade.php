@php
    $items = Fluxtor\Converge\converge()->getMenuItems();
@endphp

<div>
    <ul class="flex items-center justify-between gap-x-2 gap-y-2 px-2 lg:gap-y-0">
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
