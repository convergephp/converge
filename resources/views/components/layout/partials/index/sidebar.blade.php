<div x-data="{
    isOpen: false, // Sidebar hidden by default on small screens
    init() {
        const mediaQuery = window.matchMedia('(max-width: 1024px)');

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
     x-on:close-sidebar.window="$data.close()">

    <!-- Overlay -->
    <div x-show="isOpen"
         x-on:click="close()"
         class="bg-base-200/90 fixed inset-0 z-40 lg:hidden"></div>

    <!-- Sidebar -->
    <div x-show="isOpen"
         class="lg:z-1 border-base-300 bg-base-200 no-scrollbar scrollbar-hidden fixed bottom-0 left-0 right-auto top-0 z-50 w-[18rem] min-w-[18rem] transform flex-col overflow-y-auto border-r lg:sticky lg:top-[4rem] lg:flex lg:h-[calc(100vh-4rem)] lg:bg-transparent">
        <div class="flex items-center justify-between px-4 py-3">
            <x-converge::logo class="lg:hidden" />

            <button x-on:click="close()"
                    class="text-base-content z-50 rounded-md bg-transparent p-2 hover:cursor-pointer lg:hidden">
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
        </div>

        <!-- Sidebar Content -->
        <div class="no-scrollbar flex-1 overflow-y-auto px-2 py-6"
             id="sidebar">
            <div class="no-scrollbar overflow-y-auto text-sm lg:text-base">
                <x-converge::sidebar x-on:click="close()" />
            </div>
        </div>
    </div>
</div>
