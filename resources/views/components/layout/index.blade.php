<x-converge::layout.base>
    <div class="sticky top-0 z-30 w-full">
        <div
            class="absolute w-full h-full backdrop-blur flex-none transition-colors duration-500 border-b border-gray-500/5 dark:border-gray-300/[0.06] bg-background-light supports-backdrop-blur:bg-background-light/95 dark:bg-background-dark/75">
        </div>
        {{-- NAVBARE --}}
        <div class="w-full">
            <x-navbar />
        </div>
    </div>


    <div class="max-h-[calc(100vh-7.2rem)] mx-auto overflow-hidden max-w-7xl ">
        {{ $slot }}
    </div>
</x-converge::layout.base>
