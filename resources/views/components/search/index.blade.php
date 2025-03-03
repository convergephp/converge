<div class="pointer-events-auto relative rounded-lg">
    {{-- discktop search button --}}
    <button class="btn btn-sm bg-base-200 text-base-content hover:border-primary/80 shadow-xs border-base-300 mx-auto hidden w-full items-center border py-1.5 pl-2 pr-3 text-xs font-light leading-6 lg:flex lg:max-w-xs"
            type="button">
        <x-converge::icon icon="search"
                          class="mr-3 size-3" />
        Quick search...<span class="ml-auto flex-none pl-3 text-xs">Ctrl K</span>
    </button>

    {{-- MOBILE SEARCH BUTTON --}}
    <button
            class="shadow-xs btn-sm btn btn-square bg-base-200 text-base-content hover:border-primary border-base-300 border lg:hidden">
        <x-converge::icon icon="search"
                          class="size-3" />
    </button>
</div>
