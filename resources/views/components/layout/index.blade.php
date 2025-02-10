<x-converge::layout.base>
    {{-- NAVBARE --}}
    <div class="sticky top-0 z-30 w-full">
        <div
            class="absolute w-full h-full backdrop-blur flex-none transition-colors duration-500 border-b border-gray-500/5 dark:border-gray-300/[0.06] bg-background-light supports-backdrop-blur:bg-background-light/95 dark:bg-background-dark/75">
        </div>
        <div class="w-full">
            <x-navbar />
        </div>
    </div>

    <div class="max-h-[calc(100vh-4.2rem)] mx-auto overflow-hidden max-w-7xl ">
        <div class="flex max-h-[100vh] relative" x-data="tableOfContents">
            {{-- SIDE BARE --}}
            <div
                class="lg:z-1 z-30 absolute w-full max-h-[100vh] overflow-scroll
              px-6 hidden lg:px-0 lg:bg-transparent lg:sticky
              lg:block  lg:w-[20rem]  border-r border-r-gray-500/10">
                <x-converge::sidebar />
            </div>

            {{-- Wrapper pour le contenu principal avec gestion du défilement --}}
            <div class="relative flex-grow w-full overflow-y-auto" id="content-wrapper">
                <div class="px-4 min-h-96">
                    {{-- CONTENT --}}
                    {{ $slot }}

                    {{-- FOOTER --}}
                    @include('converge::Partials.footer')
                </div>
            </div>
            <div
                class="lg:z-10 md:hidden lg:sticky lg:top-0 lg:max-h-[100vh-2rem]  lg:w-[24rem] bg-transparent py-4 hidden lg:block">
                <x-converge::table-of-contents />
            </div>

        </div>
    </div>
</x-converge::layout.base>
