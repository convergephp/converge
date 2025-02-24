@php
    $items = Fluxtor\Converge\converge()->getMenuItems();
@endphp

<div class="px-6">
    <ul class="flex items-center gap-y-4 gap-x-0 lg:gap-y-0 lg:gap-x-4 ">
        @foreach ($items as $item)
            @if ($item instanceof Fluxtor\Converge\MenuItems\MenuItem)
                <x-converge::menu-items.item :$item />
            @endif

            @if ($item instanceof Fluxtor\Converge\MenuItems\MenuItemGroup)
                <x-converge::menu-items.group :groupItem="$item" />
            @endif
        @endforeach
    </ul>
</div>
