<x-converge::layout>
    <div class="flex max-h-[calc(100vh-7.2rem)] relative">
        {{-- SIDE BARE --}}
        <div
            class="lg:z-1 z-30 absolute w-full max-h-[calc(100vh-7.2rem)] overflow-scroll
             dark:bg-gray-950 bg-gray-100 px-6 lg:px-0 lg:bg-transparent lg:sticky
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

        <div class="z-1 hidden lg:block py-4 sticky bottom-0 right-auto w-[24rem] pb-10 bg-transparent">
            <x-converge::table-of-contents />
        </div>
    </div>
</x-converge::layout>
