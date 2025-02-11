<x-converge::layout.base>
    <main class="">
        <div class="antialiased text-gray-500 dark:text-gray-400">

            {{-- NAVBARE --}}
            @include('converge::components.layout.partials.index.navbare')

            {{-- BODY --}}
            <div class="px-4 mx-auto max-w-[88rem] relative  lg:px-8  ">

                <div class="z-20 hidden lg:block fixed bottom-0 right-auto w-[18rem] top-[4rem]" id="sidebar">
                    <div class="absolute inset-0 z-10 pb-10 pr-8 overflow-auto stable-scrollbar-gutter"
                        id="sidebar-content">
                        <div class="relative lg:text-sm lg:leading-6">
                            <div class="sticky top-0 h-8">
                                <x-converge::sidebar />
                            </div>
                        </div>
                    </div>
                </div>

                {{-- CONTENT SECTION  --}}
                <div class="" id="content-container">
                    <div class="box-border relative flex flex-row w-full gap-12 pt-40 lg:pt-10">
                        {{-- CONTENT --}}
                        <div class="relative grow box-border flex-col w-full mx-auto px-1 lg:pl-[23.7rem] lg:-ml-12 xl:w-[calc(100%-28rem)]"
                            id="content-area">
                            {{ $slot }}
                        </div>

                        {{-- TABLE OF CONTENT --}}
                        @include('converge::components.layout.partials.index.table-of-content')
                    </div>
                </div>
            </div>

            {{-- FOOTER --}}
            <footer id="footer" class="flex flex-col items-center mx-auto mt-4 ">
                <div
                    class="flex w-full flex-col gap-12 justify-between px-8  max-w-[984px] z-0 border-t border-gray-100 dark:border-gray-800/50">
                    <div class="flex flex-col md:flex-row gap-8 justify-between min-h-[76px] ">
                        @include('converge::partials.footer')
                    </div>
                </div>
            </footer>
        </div>
    </main>
</x-converge::layout.base>
