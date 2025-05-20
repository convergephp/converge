@props(['metadata'])
<?php
use function Converge\converge;
use function Converge\has_custom_footer;
use function Converge\intercept;
$hasVersions = count(\Converge\converge()->getUiVersions());
?>
<x-converge::layout.base :$metadata>
    {{-- BACKGROUND EFFECTS --}}
    @include('converge::partials.background-effets')

    <div class="flex min-h-screen flex-col">
        <div class="flex-grow antialiased">


            {{-- NAVBAR --}}
            <div id="navbar"
                 class="fixed top-0 z-30 w-full lg:sticky">
                <div id="navbar-transition"
                     class="border-base-300 supports-backdrop-blur:bg-background-light/60 absolute h-full w-full flex-none border-b backdrop-blur transition-colors">
                </div>

                <div class="relative mx-auto max-w-5xl">
                    <div class="">
                        <div class="relative">
                            <div class="flex h-16 min-w-0 items-center px-2">
                                <div class="relative flex h-full min-w-0 flex-1 items-center gap-x-2 lg:gap-x-4">
                                    {{-- BRAND --}}
                                    <div
                                         class="flex flex-grow items-center justify-between gap-x-4 lg:flex-grow-0 lg:justify-start">
                                        <x-converge::logo />
                                    </div>

                                    {{-- sidebare toggle --}}
                                    <button type="button"
                                            x-on:click="$dispatch('open-sidebar')"
                                            class="shadow-xs btn-sm btn btn-square bg-base-300/50 text-base-content hover:bg-base-300 border-base-300 inline-flex border transition-all duration-300 lg:hidden"><span
                                              class="sr-only">Navigation</span>
                                        <x-converge::icon icon="bars-4"
                                                          class="size-5" />
                                    </button>

                                    {{-- SEARCH BUTTON --}}

                                    <div class="relative ml-auto flex h-full items-center justify-end gap-2 lg:gap-4">
                                        <div class="text-center lg:block lg:flex-grow">
                                            <x-converge::search />
                                        </div>

                                        <!-- Menu items -->
                                        <nav class="items-center gap-2 text-sm lg:text-base">
                                            <x-converge::menu-items />
                                        </nav>

                                        {{-- THEM SWITCHER --}}
                                        <div class="max-w-min items-center">
                                            <x-converge::theme-switcher.inline class="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {{-- BODY --}}
            <div class="mx-auto max-w-5xl lg:flex">
                {{-- SIDEBAR --}}
                <div x-data="{
                                isOpen: false, // Sidebar hidden by default on small screens
                                init() {
                                    const mediaQuery = window.matchMedia('(max-width: 1024px)');

                                    const updateSidebarState = () => {
                                        if (mediaQuery.matches) {
                                            this.close();
                                        } else {
                                            this.open();
                                        }
                                    };
                                    updateSidebarState();
                                    mediaQuery.addEventListener('change', updateSidebarState);
                                },
                                open() {
                                    this.isOpen = true;
                                },
                                close() {
                                    this.isOpen = false;
                                },
                            }"
                     x-on:open-sidebar.window="$data.open()"
                     x-on:close-sidebar.window="$data.close()">

                    <!-- Overlay -->
                    <div x-show="isOpen"
                         x-on:click="close()"
                         class="bg-base-200/90 fixed inset-0 z-40 lg:hidden"></div>

                    <!-- Sidebar -->
                    <div x-show="isOpen"
                         x-cloak
                         class="lg:z-1 border-base-300 co-sidebar bg-base-200 no-scrollbar scrollbar-hidden fixed bottom-0 left-0 right-auto top-0 z-50 w-full min-w-[18rem] transform flex-col overflow-y-auto lg:sticky lg:top-[4rem] lg:flex lg:h-[calc(100vh-4rem)] lg:w-[18rem] lg:bg-transparent">
                        <div class="flex items-center justify-between px-2 py-3">
                            <x-converge::logo class="lg:hidden" />

                            <button x-on:click="close()"
                                    class="text-base-content z-50 rounded-md bg-transparent p-2 hover:cursor-pointer lg:hidden">
                                <svg x-show="isOpen"
                                     class="h-6 w-6"
                                     fill="none"
                                     stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-width="2"
                                          d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>

                        <!-- Sidebar Content -->
                        <div class="scrollbar-hidden flex-1 overflow-y-auto pb-6"
                             id="sidebar">
                            <div class="scrollbar-hidden overflow-y-auto text-sm lg:text-base">
                                <x-converge::sidebar x-on:click="close()" />
                            </div>
                        </div>
                    </div>
                </div>

                {{-- CONTENT --}}
                <div class="pt-21 mx-auto max-w-xl flex-1 px-4 transition-all duration-100 sm:px-5 md:max-w-2xl md:pt-10 lg:max-w-screen-md lg:pl-6 2xl:pl-4"
                     id="content-container">
                    <div class="mx-auto flex max-w-5xl gap-x-4 sm:gap-x-8 md:gap-x-12">
                        <div class="w-full pb-4">
                            <div class="mb-10
                                [&_ul]:list-none [&_ul]:pl-0 [&_ul]:space-y-1
                                [&_li]:!font-bold [&_li]:!text-lg [&_a]:!text-md
                                [&_li]:relative [&_li]:pl-4 [&_li]:py-1.5 [&_li]:transition-colors [&_li]:duration-200
                                [&_li]:text-base-content/80 [&_li:hover]:text-primary
                                [&_li::before]:absolute [&_li::before]:left-0 [&_li::before]:top-1.5
                                [&_li::before]:opacity-70 [&_li:hover::before]:opacity-100 [&_li::before]:text-primary
                                [&_a]:block

                                [&_li::before]:!content-['#'] [&>ul>li::before]:font-bold [&>ul>li::before]:text-lg">
                                <x-converge::table-of-contents :hidden_header="true" />
                            </div>
                            <!-- <div class="toc-container">
                                <x-converge::table-of-contents :hidden_header="true" />
                            </div> -->

                            {{ $slot }}
                        </div>
                    </div>
                </div>

                {{-- TABLE OF CONTENT --}}
                <!-- @include('converge::components.layout.partials.index.table-of-content') -->
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
