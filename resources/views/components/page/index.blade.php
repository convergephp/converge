<x-converge::layout>
    <div 
        class="flex max-h-[100vh] relative" 
        x-data="tableOfContents"
        >
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
                <div data-doc>
                    {{ $slot }}
                </div>
                {{-- FOOTER --}}
                @include('converge::partials.footer')
            </div>
        </div>
        <div class="lg:z-10 md:hidden lg:sticky lg:top-0 lg:max-h-[100vh-2rem]  lg:w-[24rem] bg-transparent py-4 hidden lg:block">
            <x-converge::table-of-contents />
        </div>
        
    </div>

</x-converge::layout>
