@php
    $items = Fluxtor\Converge\converge()->getMenuItems();
@endphp

<div class="px-2">
    <ul class="flex items-center gap-x-1 ">
        @foreach ($items as $item)
            @if ($item instanceof Fluxtor\Converge\MenuItems\MenuItem)
                <x-converge::menu-items.item :$item />
            @endif

            @if ($item instanceof Fluxtor\Converge\MenuItems\MenuItemGroup)
                <x-converge::menu-items.group :groupItem="$item" />
            @endif
        @endforeach
        <li>
            <a href="/docs"
                class="btn btn-sm btn-primary whitespace-nowrap"
                target="_blank"
            >Sponsor converge</a>
         </li>
    </ul>
</div>
