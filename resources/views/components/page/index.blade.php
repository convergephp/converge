<x-converge::layout>

    <div class="flex max-h-[calc(100vh-80px)]  lg:px-[18rem] relative">

        {{-- SIDE BARE  - Visibilty of sidebar based on "hidden=not visible and absolute=visible" classes --}}
        <div
            class="lg:z-1 z-30 absolute w-full max-w-none overflow-scroll max-h-[calc(100vh-80px)]
             dark:bg-gray-950 bg-gray-100 px-6 py-2 lg:px-0 lg:bg-transparent lg:sticky top-0 right-0
              lg:block  lg:w-[20rem]  border-r border-r-gray-500/10">
            <x-converge::sidebar />
        </div>

        <div class="relative flex-grow w-full px-4 py-4 overflow-x-hidden overflow-y-auto lg:px-8">
            {{-- CONTENT --}}
            {{ $slot }}

            {{-- FOOTER --}}
            @include('converge::Partials.footer')
        </div>

        <div class="z-1 hidden lg:block py-4 sticky bottom-0 right-auto w-[24rem]  pb-10 bg-transparent">
            <x-converge::table-of-contents />
        </div>

    </div>
</x-converge::layout>
