<div x-data="{ isOpen: true }" :class="{ '-translate-x-full': !isOpen }"
    class="fixed z-50 lg:z-1 w-[19rem] lg:w-[19rem] lg:sticky flex flex-col overflow-y-auto
           left-0 bottom-0 right-auto border-r border-gray-200/70 dark:border-white/[0.07]
           transition-transform duration-300 ease-in-out
           dark:bg-converge-primary bg-white lg:bg-transparent lg:dark:bg-transparent
           top-0  lg:top-[4rem] lg:h-[calc(100vh-4rem)]
           transform lg:translate-x-0">

    {{-- Toggle Button (mobile only) --}}
    <button @click="isOpen = !isOpen"
        class="fixed z-50 p-2 bg-transparent rounded-md top-4 right-4 hover:cursor-pointer lg:hidden ">
        <svg x-show="!isOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
        <svg x-show="isOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
    </button>

    <!-- Sidebar Content -->
    <div class="flex-1 py-6 overflow-y-auto px-7">
        <div class="relative text-sm">
            <x-converge::sidebar />
        </div>
    </div>
</div>
