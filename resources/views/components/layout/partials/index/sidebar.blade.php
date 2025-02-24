<div 
    x-data="{ 
        isOpen: true,
        init(){
            if(window.matchMedia('(max-width: 48rem)').matches){
                this.close();
            }
        },
        open(){
            return this.isOpen = true;
        }, 
        close(){
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
    class="fixed z-50 lg:z-1 w-[18rem] min-w-[18rem] lg:sticky lg:flex flex-col overflow-y-auto left-0 bottom-0 right-auto border-r border-base-300
           bg-base-200 lg:bg-transparent top-0 lg:top-[4rem] lg:h-[calc(100vh-4rem)] transform">
    <button x-on:click="isOpen = !isOpen"
        class="fixed z-50 p-2 bg-transparent rounded-md top-4 right-4 hover:cursor-pointer lg:hidden ">
        <svg x-show="!isOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
        <svg x-show="isOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
    </button>

    <!-- Sidebar Content -->
    <div class="flex-1 py-6 overflow-y-auto px-7" id="sidebar">
        <div class="relative text-sm lg:text-base">
            <x-converge::sidebar />
        </div>
    </div>
</div>
