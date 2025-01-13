<div
    class="aside-dashboard border-r dark:border-white/15 fixed inset-0 left-[max(0px,calc(50%-45rem))] right-auto top-[3.8125rem] hidden w-[15rem] overflow-y-auto pb-10 pl-8 pr-6 lg:block">
    <nav class="relative lg:text-sm lg:leading-6" id="nav">
        <div class="sticky top-0 -ml-2 dark:bg-gray-950 bg-gray-100 z-50">
            <div class="h-10 bg-gradient-to-b from-white dark:from-gray-950 dark:to-white/5  z-50">
                <div class="h-10  bg-gray-100 dark:bg-gray-950">
                </div>
            </div>
            <div 
                class="flex items-center w-full justify-center" 
            >
                <div class="pointer-events-auto  relative bg-white dark:bg-gray-950 rounded-lg">
                    <button
                        class="hidden w-full items-center rounded-lg py-1.5 pl-2 pr-3 text-sm leading-6 text-slate-400 shadow-sm ring-2  ring-purple-500/15 hover:ring-purple-500 transition-all duration-300 dark:hover:bg-[#02031C] lg:flex"
                        type="button"
                    >
                        <svg class="mr-3 flex-none" aria-hidden="true" width="24" height="24" fill="none">
                            <path d="m19 19-3.5-3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                            <circle cx="11" cy="11" r="6" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round"></circle>
                        </svg>Quick search...<span class="ml-auto flex-none pl-3 text-xs font-semibold">Ctrl K</span>
                    </button>
                </div>
            </div>
            <div class="h-4 bg-gray-100 dark:bg-gray-950 dark:to-transparent "></div>
        </div>
        <x-converge::sidebar.items />
    </nav>
</div>