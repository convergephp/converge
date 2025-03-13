<div x-data="{
    isOpen: true,
    init() {
        const mediaQuery = window.matchMedia('(max-width: 48rem)');

        const updateSidebarState = () => {
            if (mediaQuery.matches) {
                this.close();
            } else {
                this.open();
            }
        };
        updateSidebarState();
        mediaQuery.addEventListener('change', updateSidebarState);
    },
    open() {
        this.isOpen = true;
    },
    close() {
        this.isOpen = false;
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
     class="lg:z-1 border-base-300 bg-base-200 no-scrollbar fixed bottom-0 left-0 right-auto top-0 z-50 w-[18rem] min-w-[18rem] transform flex-col overflow-y-auto border-r lg:sticky lg:top-[4rem] lg:flex lg:h-[calc(100vh-4rem)] lg:bg-transparent">
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
    <div class="no-scrollbar flex-1 overflow-y-auto px-2 py-6"
         id="sidebar">
        <div class="no-scrollbar overflow-y-auto text-sm lg:text-base">
            <x-converge::sidebar />
        </div>
    </div>
</div>
