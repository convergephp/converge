<div x-data="{
    isOpen: true,
    init() {
        if (window.matchMedia('(max-width: 48rem)').matches) {
            this.close();
        }
    },
    open() {
        return this.isOpen = true;
    },
    close() {
        return this.isOpen = false;
    },
}"
     x-on:open-sidebar.window="$data.open()"
     x-on:close-sidebar.window="$data.close()"
     x-show="isOpen"
     x-transition:enter="transform transition duration-300 ease-in-out"
     x-transition:enter-start="-translate-x-full opacity-0 scale-90"
     x-transition:enter-end="translate-x-0 opacity-100 scale-100"
     x-transition:leave="transform transition duration-300 ease-in-out"
     x-transition:leave-start="translate-x-0 opacity-100 scale-100"
     x-transition:leave-end="-translate-x-full opacity-0 scale-90"
     class="lg:z-1 border-base-300 bg-base-200 fixed bottom-0 left-0 right-auto top-0 z-50 w-[18rem] min-w-[18rem] transform flex-col overflow-y-auto border-r lg:sticky lg:top-[4rem] lg:flex lg:h-[calc(100vh-4rem)] lg:bg-transparent">
    <button x-on:click="isOpen = !isOpen"
            class="text-base-content fixed right-4 top-4 z-50 rounded-md bg-transparent p-2 hover:cursor-pointer lg:hidden">
        <svg x-show="!isOpen"
             class="h-6 w-6"
             fill="none"
             stroke="currentColor"
             viewBox="0 0 24 24">
            <path stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
        <svg x-show="isOpen"
             class="h-6 w-6"
             fill="none"
             stroke="currentColor"
             viewBox="0 0 24 24">
            <path stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"></path>
        </svg>
    </button>

    <!-- Sidebar Content -->
    <div class="flex-1 overflow-y-auto px-7 py-6"
         id="sidebar">
        <div class="relative text-sm lg:text-base">
            <x-converge::sidebar />
        </div>
    </div>
</div>
