<div x-data
     class="rounded-box pointer-events-auto relative">
    {{-- discktop search button --}}
    <button x-mousetrap.command-k.ctrl-k
            {{ $attributes->merge(['class' => 'rounded-field bg-base-100   text-base-content hover:border-primary/80 shadow-xs border-base-300 mx-auto hidden w-full items-center border py-1.5 pl-2 pr-3 text-xs font-light leading-6 transition-all duration-300 lg:flex lg:max-w-xs']) }}
            x-on:click="$dispatch('open-search')"
            type="button">
        <x-converge::icon icon="search"
                          class="mr-3 size-4" />
        Quick search...
        <span class="ml-auto flex-none pl-3 text-xs">Ctrl K</span>

    </button>

    {{-- MOBILE SEARCH BUTTON --}}
    <button x-on:click="$dispatch('open-search')"
            class="shadow-xs btn-sm btn btn-square bg-base-300/50 text-base-content hover:bg-base-300 border-base-300 border transition-all duration-300 lg:hidden">
        <x-converge::icon icon="search"
                          class="size-3" />
    </button>
</div>
