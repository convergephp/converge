<x-converge::layout.base>
    <div class="flex flex-col min-h-screen">
        <div class="flex-grow antialiased">
            {{-- NAVBAR --}}
            @include('converge::components.layout.partials.index.navbar')

            {{-- BACKGROUND EFFECTS --}}
            @include('converge::partials.background-effets')

            {{-- BODY --}}
            <div class="mx-auto max-w-[88rem] lg:flex">
                {{-- SIDEBAR --}}
                @include('converge::components.layout.partials.index.sidebar')

                {{-- CONTENT --}}
                <div class="flex-1 max-w-xl px-4 pt-24 mx-auto transition-all duration-100 sm:px-5 sm:pt-28 md:pt-32 lg:pt-10 lg:pl-6 md:max-w-2xl lg:max-w-screen-md 2xl:pl-24"
                    id="content-container">
                    <div class="flex max-w-5xl mx-auto gap-x-4 sm:gap-x-8 md:gap-x-12">
                        <div class="w-full pb-4">
                            {{ $slot }}
                        </div>
                    </div>
                </div>

                {{-- TABLE OF CONTENT --}}
                @include('converge::components.layout.partials.index.table-of-content')
            </div>
        </div>

        {{-- FOOTER --}}
        <div class="mt-auto">
            @include('converge::components.layout.partials.index.footer')
        </div>
    </div>
</x-converge::layout.base>
