<x-converge::layout.base>
    <div class="relative flex flex-col min-h-screen">
        {{-- NAVBARE --}}
        <div id="navbar" class="fixed top-0 z-30 w-full lg:sticky ">
            <div
                class="z-10 absolute w-full h-full  backdrop-blur flex-none transition-colors duration-500  border-gray-500/5 dark:border-gray-300/[0.06] bg-background-light supports-backdrop-blur:bg-background-light/95 dark:bg-background-dark/75 border-b border-gray-200 dark:border-gray-800">
            </div>
            <div class="relative z-10 px-2 lg:px-12 ">
                <x-navbar />
                <div class="items-center justify-start hidden h-12 lg:flex lg:space-x-3 ">

                    {{-- link 1 --}}
                    <a class="relative flex items-center h-full font-semibold text-gray-800 group dark:text-gray-200"
                        href="/filament/docs/">Link 1<div
                            class="absolute bottom-0 h-[1.5px] w-full bg-primary dark:bg-primary-light bg-purple-600">
                        </div></a>

                    {{-- link 1 --}}
                    <a class="relative flex items-center h-full font-semibold text-gray-800 group dark:text-gray-200"
                        href="/filament/docs/">Link 2<div
                            class="absolute bottom-0 h-[1.5px] w-full bg-primary dark:bg-primary-light ">
                        </div></a>
                </div>
            </div>
        </div>

        {{-- CORE CONTENT --}}
        <div class="lg:flex lg:px-12" x-data="tableOfContents">

            {{-- SIDEBARE --}}
            <div
                class="hidden sticky lg:flex flex-col left-0 bottom-0 right-auto border-r border-gray-200/70 dark:border-white/[0.07]
            transition-transform duration-100 top-[7rem] h-[calc(100vh-7.1rem)] w-[19rem] min-w-[19rem]">
                <div class="py-2 overflow-y-auto">
                    <x-converge::sidebar />
                </div>
            </div>

            {{-- CONTENT --}}
            <div class="flex-1 max-w-6xl px-5 transition-all duration-100 mt-35 lg:mt-10">
                {{ $slot }}
            </div>

            {{-- TABLE OF CONTENT --}}
            <div
                class="hidden sticky lg:block right-0 bottom-0 left-auto overflow-y-auto pb-10
            transition-transform duration-100 top-[7rem] h-[calc(100vh-7.1rem)] w-[22rem] min-w-[22rem]">
                <x-converge::table-of-contents />
            </div>
        </div>

        {{-- FOOTER --}}
        <div
            class="z-10 border-t border-slate-500/10 backdrop-blur flex-none transition-colors duration-500   dark:border-gray-300/[0.06] bg-background-light supports-backdrop-blur:bg-background-light/95 dark:bg-background-dark/75 ">
            <div class="flex flex-col items-center px-4 mx-auto max-w-7xl lg:p-0 ">
                @include('converge::partials.footer')
            </div>
        </div>
    </div>
    </div>
</x-converge::layout.base>
