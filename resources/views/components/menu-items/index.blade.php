@php
    $items = Converge\converge()->getMenuItems();
@endphp

@if (count($items) > 0)
    <div>
        {{-- Discktop menu items --}}
        <div class="hidden lg:block">
            <ul class="flex flex-row items-center justify-between gap-x-2">
                @foreach ($items as $item)
                    @if ($item instanceof Converge\MenuItems\MenuItem)
                        <li>
                            <x-converge::menu-items.item :$item />
                        </li>
                    @endif

                    @if ($item instanceof Converge\MenuItems\MenuItemGroup)
                        <x-converge::menu-items.group :groupItem="$item" />
                    @endif
                @endforeach
            </ul>
        </div>

        {{-- Mobile screen menu items --}}
        <div class="block lg:hidden"
             x-data="{ openMenu: false }">

            <div class="flex items-center justify-end">
                <button x-on:click="openMenu = !openMenu"
                        class="shadow-xs btn-sm btn btn-square bg-base-300/50 text-base-content hover:bg-base-300 border-base-300 border transition-all duration-300"
                        x-ref="menuButton">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         class="h-4 w-4"
                         fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                </button>
            </div>

            {{-- Dropdown --}}
            <div x-show="openMenu"
                 x-on:click.away="openMenu = false"
                 x-anchor.bottom-end="$refs.menuButton"
                 x-anchor.offset.8="$refs.menuButton"
                 x-transition:enter="transition ease-out duration-100"
                 x-transition:enter-start="transform opacity-0 scale-95"
                 x-transition:enter-end="transform opacity-100 scale-100"
                 x-transition:leave="transition ease-in duration-75"
                 x-transition:leave-start="transform opacity-100 scale-100"
                 x-transition:leave-end="transform opacity-0 scale-95"
                 class="bg-base-100 z-10 w-48 origin-top-right rounded-md py-2 shadow-lg">
                <!-- Triangle pointer -->
                <div x-anchor.bottom="$refs.menuButton"
                     x-anchor.offset-10="$refs.menuButton"
                     class="flex justify-center">
                    <div
                         class="border-b-base-300 h-0 w-0 border-b-8 border-l-8 border-r-8 border-l-transparent border-r-transparent">
                    </div>
                </div>

                <ul class="flex flex-col gap-y-2 py-2">
                    @foreach ($items as $item)
                        @if ($item instanceof Converge\MenuItems\MenuItem)
                            <li class="px-4">
                                <x-converge::menu-items.item :$item />
                            </li>
                        @endif

                        @if ($item instanceof Converge\MenuItems\MenuItemGroup)
                            <li class="px-4">
                                <x-converge::menu-items.group :groupItem="$item" />
                            </li>
                        @endif
                    @endforeach
                </ul>
            </div>
        </div>
    </div>
@endif
