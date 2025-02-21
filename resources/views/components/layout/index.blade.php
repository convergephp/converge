<x-converge::layout.base>
    <div class="fle min-h-screen flex-col">
        <div class="flex-grow antialiased">
            {{-- navbare --}}
            @include('converge::components.layout.partials.index.navbar')

            {{-- BACKGROUND EFFETS --}}
            @include('converge::partials.background-effets')

            {{-- BODY --}}
            <div class="mx-auto max-w-[88rem] lg:flex">

                {{-- SIDEBAR --}}
                @include('converge::components.layout.partials.index.sidebar')

                {{-- CONTENT --}}
                <div class="flex-1 px-5 pt-36 transition-all duration-100 lg:pl-6 lg:pt-10 2xl:pl-24"
                    id="content-container">
                    <div class="mx-auto flex max-w-5xl gap-x-12">
                        <div class="w-full content-center pb-4">
                            {{ $slot }}
                        </div>
                    </div>
                </div>

                {{-- TABLE OF CONTENT --}}
                @include('converge::components.layout.partials.index.table-of-content', [
                    'headings' => $headings,
                ])
            </div>
        </div>

        {{-- FOOTER --}}
        <div class="mt-auto max-h-10">
            @include('converge::components.layout.partials.index.footer')
        </div>
    </div>
</x-converge::layout.base>
