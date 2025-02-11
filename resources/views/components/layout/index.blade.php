<x-converge::layout.base>
    <div id="__next">
        <main class="jsx-3178852779">
            <div class="relative antialiased text-gray-500 dark:text-gray-400">
                {{-- navbare --}}
                @include('converge::components.layout.partials.index.navbare')


                <div class="lg:flex max-w-[88rem] mx-auto" x-data="tableOfContents">
                    {{-- SIDEBAR --}}
                    @include('converge::components.layout.partials.index.sidebar')

                    {{-- CONTENT --}}
                    <div class="flex-1 px-5 transition-all duration-100 pt-36 lg:pt-10 lg:pl-24" id="content-container">
                        <div class="flex max-w-5xl mx-auto gap-x-12">
                            <div class="content-center w-full">
                                {{ $slot }}
                            </div>
                        </div>
                    </div>

                    {{-- TABLE OF CONTENT --}}
                    @include('converge::components.layout.partials.index.table-of-content')
                </div>
            </div>

            {{-- FOOTER --}}
            @include('converge::components.layout.partials.index.footer')
        </main>
    </div>
</x-converge::layout.base>
