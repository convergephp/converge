<x-converge::layout.base>

    {{-- BACKGROUND EFFETS --}}
    @include('converge::partials.background-effets')

    <div class="relative flex min-h-screen flex-col">
        {{-- NAVBARE --}}
        <div class="fixed top-0 z-30 w-full lg:sticky" id="navbar">
            <div
                class="bg-background-light supports-backdrop-blur:bg-background-light/95 dark:bg-background-dark/75 absolute z-10 h-full w-full flex-none border-b border-gray-200 border-gray-500/5 backdrop-blur transition-colors duration-500 dark:border-gray-300/[0.06] dark:border-gray-800">
            </div>
            <div class="relative z-10 px-2 lg:px-12">
                <x-navbar />
                <div class="hidden h-12 items-center justify-start lg:flex lg:space-x-3">

                    {{-- link 1 --}}
                    <a class="group relative flex h-full items-center font-semibold text-gray-800 dark:text-gray-200"
                        href="/filament/docs/">Link 1<div
                            class="bg-primary dark:bg-primary-light absolute bottom-0 h-[1.5px] w-full bg-purple-600">
                        </div></a>

                    {{-- link 1 --}}
                    <a class="group relative flex h-full items-center font-semibold text-gray-800 dark:text-gray-200"
                        href="/filament/docs/">Link 2<div
                            class="bg-primary dark:bg-primary-light absolute bottom-0 h-[1.5px] w-full">
                        </div></a>
                </div>
            </div>
        </div>

        {{-- CORE CONTENT --}}
        <div class="lg:flex lg:px-12" x-data="tableOfContents">

            {{-- SIDEBARE --}}
            <div
                class="sticky bottom-0 left-0 right-auto top-[7rem] hidden h-[calc(100vh-7.1rem)] w-[19rem] min-w-[19rem] flex-col border-r border-gray-200/70 transition-transform duration-100 lg:flex dark:border-white/[0.07]">
                <div class="overflow-y-auto py-2">
                    <x-converge::sidebar />
                </div>
            </div>

            {{-- CONTENT --}}
            <div class="mt-35 max-w-6xl flex-1 px-5 transition-all duration-100 lg:mt-10">
                {{ $slot }}
            </div>

            {{-- TABLE OF CONTENT --}}
            <div
                class="sticky bottom-0 left-auto right-0 top-[7rem] hidden h-[calc(100vh-7.1rem)] w-[22rem] min-w-[22rem] overflow-y-auto pb-10 transition-transform duration-100 lg:block">
                <x-converge::table-of-contents />
            </div>
        </div>

        {{-- FOOTER --}}
        <div
            class="bg-background-light supports-backdrop-blur:bg-background-light/95 dark:bg-background-dark/75 z-10 flex-none border-t border-slate-500/10 backdrop-blur transition-colors duration-500 dark:border-gray-300/[0.06]">
            <div class="mx-auto flex max-w-7xl flex-col items-center px-4 lg:p-0">
                @include('converge::partials.footer')
            </div>
        </div>
    </div>
    </div>
</x-converge::layout.base>
