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
                class="shadow-base-300 fixed top-0 z-20 flex h-[64px] w-full flex-none flex-col shadow-[0px_1px_0px] backdrop-blur-lg">
            <div class="w-full">
                <div class="scroll-nojump px-2">
                    <div
                         class="mx-auto flex min-h-16 w-full max-w-screen-2xl items-center justify-between gap-x-4 py-3 sm:h-16">
                        <div class="md:min-w-sm flex max-w-full items-center justify-start gap-4">
                            <!-- Sidebar toggle button - Mobile only -->
                            <button x-on:click="sideBarOpen = !sideBarOpen"
                                    type="button"
                                    class="shadow-xs btn-sm btn btn-square bg-base-300/50 text-base-content hover:bg-base-300 border-base-300 border transition-all duration-300 lg:hidden"
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
                            <div class="text-center lg:flex-grow">
                                <x-converge::search />
                            </div>
                        </div>

                        <div class="flex grow-0 items-center justify-end gap-4 md:basis-full">
                            <!-- Navigation items - desktop only -->
                            <nav class="md:block">
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
            <div class="relative mx-auto flex min-h-[calc(100vh-64px)] max-w-screen-2xl flex-col pt-16 lg:flex-row">
                <!-- Mobile sidebar overlay -->
                <div x-show="sideBarOpen"
                     x-transition:enter="transition ease-out duration-200"
                     x-transition:enter-start="opacity-0"
                     x-transition:enter-end="opacity-100"
                     x-transition:leave="transition ease-in duration-150"
                     x-transition:leave-start="opacity-100"
                     x-transition:leave-end="opacity-0"
                     class="bg-base-200/80 fixed inset-0 z-10 lg:hidden"
                     x-on:click="sideBarOpen = false">
                </div>

                <!-- Sidebar -->
                <aside x-cloak
                       x-bind:class="{ 'translate-x-0': sideBarOpen, '-translate-x-full': !sideBarOpen }"
                       class="lg:basis-70 bg-base-200 border-r-base-300 scrollbar-hidden fixed top-[64px] z-[15] flex h-[calc(100vh-64px)] w-4/5 grow-0 basis-full flex-col gap-4 overflow-y-auto border-r pb-4 pt-6 shadow-lg transition-transform duration-300 ease-in-out sm:w-64 lg:relative lg:sticky lg:z-[1] lg:max-h-[calc(100vh-64px)] lg:w-auto lg:translate-x-0 lg:bg-transparent lg:shadow-none">

                    <!-- Version selector (conditionally shown) -->
                    @if ($hasVersions)
                        <div x-bind:class="{ 'border-b border-gray-400/20': sideBarOpen }"
                             class="pb-4 lg:border-b px-2 lg:border-gray-400/20">
                            <x-converge::versions class="z-30" />
                        </div>
                    @endif

                    <!-- Sidebar navigation items -->
                    <x-converge::sidebar />
                </aside>

                <div class="flex min-w-0 flex-1 flex-col">
                    <div class="flex grow flex-row-reverse justify-end">
                        <!-- Table of contents (right sidebar) -->
                        <aside
                               class="group/aside basis-70 sticky top-24 hidden max-h-[calc(100vh-8rem)] shrink-0 grow-0 flex-col overflow-y-auto xl:flex">
                            <div
                                 class="lg:top:0 scrollbar-hidden sticky flex shrink flex-col overflow-y-auto overflow-x-visible pb-12">
                                <x-converge::table-of-contents />
                            </div>
                        </aside>

                        <!-- Main content -->
                        <main
                              class="break-anywhere page-api-block:xl:max-2xl:pr-0 page-api-block:mx-auto page-api-block:max-w-screen-2xl page-default-width page-has-toc relative min-w-0 flex-1  py-8">
                            <div class="px-2 lg:px-0">
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
