<?php
use function Fluxtor\Converge\converge;
use function Fluxtor\Converge\has_custom_footer;
use function Fluxtor\Converge\intercept;
$hasVersions = count(\Fluxtor\Converge\converge()->getUiVersions());
?>

<x-converge::layout.base>

    <div class="bg-base-200"
         x-data="{ sideBarOpen: false }">
        {{-- BACKGROUND EFFECT --}}

        <!-- Header -->
        <header id="site-header"
                class="flex flex-col h-[64px] fixed top-0 z-20 w-full flex-none shadow-[0px_1px_0px] shadow-base-300 backdrop-blur-lg">
            <div class="w-full">
                <div class="scroll-nojump px-2 lg:px-4">
                    <div
                         class="flex items-center gap-x-4 justify-between w-full py-3 min-h-16 sm:h-16 max-w-screen-2xl mx-auto">
                        <div class="flex max-w-full items-center md:min-w-sm justify-start gap-4">
                            <!-- Sidebar toggle button - Mobile only -->
                            <button x-on:click="sideBarOpen = !sideBarOpen"
                                    type="button"
                                    class="btn lg:hidden btn-square btn-sm"
                                    aria-label="Toggle navigation">
                                <!-- Icon when menu is closed -->
                                <svg x-show="!sideBarOpen"
                                     stroke="currentColor"
                                     fill="currentColor"
                                     class="text-base-content h-5 w-5"
                                     stroke-width="0"
                                     viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path>
                                </svg>

                                <!-- Icon when menu is open -->
                                <svg x-show="sideBarOpen"
                                     class="h-5 w-5"
                                     xmlns="http://www.w3.org/2000/svg"
                                     fill="none"
                                     viewBox="0 0 24 24"
                                     stroke="currentColor">
                                    <path stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-width="2"
                                          d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <!-- LOGO -->
                            <x-converge::logo />

                            <!-- Search Button -->
                            <div class="text-center">
                                <x-converge::search />
                            </div>
                        </div>

                        <div class="flex grow-0 md:basis-full justify-end items-center gap-4">
                            <!-- Navigation items - desktop only -->
                            <nav class="hidden md:block">
                                <x-converge::menu-items />
                            </nav>

                            <!-- Visual divider -->
                            <div class="block h-5 w-px bg-gray-400/20"></div>

                            <!-- Theme switcher component -->
                            <x-converge::theme-switcher.inline />
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <!-- Background spotlight -->
        <div class="sticky">
            @include('converge::partials.background-effets')
        </div>

        <div class="scroll-nojump">
            <div class="flex relative pt-16 flex-col lg:flex-row max-w-screen-2xl mx-auto min-h-[calc(100vh-64px)]">
                <!-- Mobile sidebar overlay -->
                <div x-show="sideBarOpen"
                     x-transition:enter="transition ease-out duration-200"
                     x-transition:enter-start="opacity-0"
                     x-transition:enter-end="opacity-100"
                     x-transition:leave="transition ease-in duration-150"
                     x-transition:leave-start="opacity-100"
                     x-transition:leave-end="opacity-0"
                     class="fixed inset-0 z-10 bg-base-200/80 lg:hidden"
                     @click="sideBarOpen = false">
                </div>

                <!-- Sidebar -->
                <aside x-cloak
                       :class="{'translate-x-0': sideBarOpen, '-translate-x-full': !sideBarOpen}"
                       class="group grow-0 px-2 lg:px-4 basis-full overflow-y-auto lg:translate-x-0 lg:basis-70
                          fixed lg:relative z-[15] lg:z-[1] lg:sticky top-[64px] lg:max-h-[calc(100vh-64px)]
                          w-4/5 sm:w-64 lg:w-auto bg-base-200 lg:bg-transparent h-[calc(100vh-64px)]
                          pt-6 pb-4 flex flex-col gap-4 shadow-lg lg:shadow-none
                          transition-transform duration-300 ease-in-out">

                    <!-- Version selector (conditionally shown) -->
                    @if ($hasVersions)
                        <div x-bind:class="{ 'border-b border-gray-400/20': sideBarOpen }"
                             class="pb-4 lg:border-b  lg:border-gray-400/20">
                            <x-converge::versions class="z-30" />
                        </div>
                    @endif

                    <!-- Sidebar navigation items -->
                    <x-converge::sidebar.items />
                </aside>

                <div class="flex min-w-0 flex-1 flex-col">
                    <div class="flex grow flex-row-reverse justify-end">
                        <!-- Table of contents (right sidebar) -->
                        <aside
                               class="group/aside hidden xl:flex flex-col basis-70 grow-0 shrink-0 sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
                            <div class="overflow-y-auto overflow-x-visible flex flex-col shrink pb-12 sticky lg:top:0">
                                <x-converge::table-of-contents />
                            </div>
                        </aside>

                        <!-- Main content -->
                        <main class="relative min-w-0 flex-1 px-2 lg:px-4 py-8 break-anywhere page-api-block:xl:max-2xl:pr-0 page-api-block:mx-auto
                                page-api-block:max-w-screen-2xl page-default-width page-has-toc">
                            <div>
                                {{ $slot }}
                            </div>

                            <!-- Footer -->
                            <div class="mt-auto">
                                <!-- Conditional custom footer -->
                                @if (filled(converge()->getFooter()))
                                    <div class="border-base-300 bg-base-200 border-t">
                                        {!! converge()->getFooter() !!}
                                    </div>
                                @else
                                    @include('converge::components.layout.partials.index.footer')
                                @endif

                                <!-- Brand footer component -->
                                <x-converge::brand-footer />
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-converge::layout.base>
