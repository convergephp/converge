<div class="relative rounded-lg pointer-events-auto">
    {{-- discktop search button --}}
    <button
        class="  btn w-full hidden lg:flex mx-auto lg:max-w-xs items-center  py-1.5 pl-2 pr-3 text-xs leading-6
        bg-base-300/50 text-base-content hover:bg-base-300 shadow-xs font-light  transition-all duration-300 border border-base-300"
        type="button">
        <x-converge::icon icon="search" class="mr-3 size-3" />
        Quick search...<span class="flex-none pl-3 ml-auto text-xs">Ctrl K</span>
    </button>

    {{-- MOBILE SEARCH BUTTON --}}
    <button
        class="transition-all duration-300 border shadow-xs btn-sm btn lg:hidden btn-square bg-base-300/50 text-base-content hover:bg-base-300 border-base-300">
        <x-converge::icon icon="search" class="size-5" />
    </button>
</div>
