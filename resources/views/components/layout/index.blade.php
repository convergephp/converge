@props(['metadata'])
<?php
use function Fluxtor\Converge\converge;
use function Fluxtor\Converge\has_custom_footer;
use function Fluxtor\Converge\intercept;
?>
<x-converge::layout.base :$metadata>
    {{-- BACKGROUND EFFECTS --}}
    @include('converge::partials.background-effets')

    <div class="flex min-h-screen flex-col">
        <div class="flex-grow antialiased">
            {{-- NAVBAR --}}
            @include('converge::components.layout.partials.index.navbar')

            {{-- BODY --}}
            <div class="mx-auto max-w-[88rem] lg:flex">
                {{-- SIDEBAR --}}
                @include('converge::components.layout.partials.index.sidebar')

                {{-- CONTENT --}}
                <div class="mx-auto max-w-xl flex-1 px-4 pt-32 transition-all duration-100 sm:px-5 sm:pt-28 md:max-w-2xl md:pt-32 lg:max-w-screen-md lg:pl-6 lg:pt-10 2xl:pl-4"
                     id="content-container">
                    <div class="mx-auto flex max-w-5xl gap-x-4 sm:gap-x-8 md:gap-x-12">
                        <div class="w-full pb-4">
                            {{ $slot }}
                        </div>
                    </div>
                </div>

                {{-- TABLE OF CONTENT --}}
                @include('converge::components.layout.partials.index.table-of-content')
            </div>
        </div>

    </div>
    {{-- FOOTER --}}
    <div class="mx-auto max-w-[88rem]">
        @if (filled(converge()->getFooter()))
            <div class="border-base-300 bg-base-200 border-t">
                {!! converge()->getFooter() !!}
            </div>
        @else
            @include('converge::components.layout.partials.index.footer')
        @endif

        <x-converge::brand-footer />
    </div>
    </div>
</x-converge::layout.base>
