<?php
use function Converge\converge;
use function Converge\has_custom_footer;
use function Converge\intercept;
$hasVersions = count(\Converge\converge()->getUiVersions());
?>

<x-converge::layout.base>
    <div x-data="{ sidebarOpen: false }">
        {{-- Navbar --}}
        <nav
             class="border-base-300 bg-base-200 supports-backdrop-blur:bg-base-200 supports-backdrop-blur:bg-background-light/60 fixed top-0 z-40 w-full border-b lg:bg-transparent backdrop-blur ">
            <div class="z-40 px-2 py-3 lg:px-6">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-x-2">
                        {{-- open and close sidebar --}}
                        <button x-on:click="sidebarOpen = !sidebarOpen"
                                type="button"
                                class="shadow-xs btn-sm btn btn-square bg-base-300/50 text-base-content hover:bg-base-300 border-base-300 border transition-all duration-300 lg:hidden"
                                aria-label="Toggle navigation">

                            {{-- Icon when menu is closed --}}
                            <svg x-show="!sidebarOpen"
                                 stroke="currentColor"
                                 fill="currentColor"
                                 class="text-base-content h-4 w-4"
                                 stroke-width="0"
                                 viewBox="0 0 24 24"
                                 color="currentColor"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path>
                            </svg>

                            {{-- Icon when menu is open --}}
                            <svg x-show="sidebarOpen"
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

                        {{-- BRAND AND VERSION --}}
                        <div
                             class="flex flex-grow items-center justify-between gap-x-4 lg:flex-grow-0 lg:justify-start">
                            <x-converge::logo />
                        </div>
                    </div>

                    <div class="flex flex-grow items-center justify-end gap-1 lg:gap-2">
                        {{-- SEARCH BUTTON --}}
                        <div class="text-center lg:flex-grow order-2 lg:order-1">
                            <x-converge::search class="lg:!max-w-2xl" />
                        </div>

                        <div class="hidden md:block lg:order-2 mr-2">
                            @if ($hasVersions)
                                <x-converge::versions class="h-full" />
                            @endif
                        </div>

                        {{-- NAVBARE ITEMS --}}
                        <nav class="items-center text-sm lg:flex order-3 lg:text-base">
                            <x-converge::menu-items />
                        </nav>

                        {{-- THEME SWITCHER --}}
                        <div class="max-w-min items-center order-4">
                            <x-converge::theme-switcher.inline class="" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        {{-- BACKGROUND EFFECT --}}
        @include('converge::partials.background-effets')

        {{-- Main Layout Container --}}
        <div class="flex min-h-screen">

            {{-- Sidebar --}}
            <aside class="bg-base-200 scrollbar-hidden border-base-300 fixed left-0 top-0 z-30 h-screen w-72 overflow-y-auto border-r lg:translate-x-0 lg:bg-transparent"
                   x-bind:class="sidebarOpen ? 'translate-x-0' : '-translate-x-full'">
                <div class="grid-row-2 grid">
                    {{-- Sidebar spacing for navbar --}}
                    <div class="h-20"></div>
                    {{-- Sidebar content --}}
                    <div id="sidebar"
                         class="overflow-y-auto scrollbar-hidden">
                        <div class="block md:hidden px-2 mb-6">
                            @if ($hasVersions)
                                <x-converge::versions class="h-full" />
                            @endif
                        </div>

                        <x-converge::sidebar />
                    </div>
                </div>
            </aside>

            {{-- Mobile overlay --}}
            <div class="fixed inset-0 bg-base-200/80 z-20  lg:hidden"
                 x-show="sidebarOpen"
                 x-cloak
                 x-on:click="sidebarOpen = false">
            </div>

            {{-- Main Content Area --}}
            <main class="w-full flex-1 lg:pl-72">
                <div class="container mx-auto">
                    {{-- Content Grid --}}
                    <div class="mx-auto gap-4 px-4 pb-12 pt-24 xl:grid xl:grid-cols-[1fr,19rem]">
                        <div class="mx-auto gap-4 xl:flex xl:gap-6">
                            {{-- MAIN CONTENT --}}
                            <div class="mx-auto md:pb-24">
                                <div class="mx-auto px-2">
                                    {{ $slot }}
                                </div>
                            </div>

                            {{-- TABLE OF CONTENT --}}
                            <div class="hidden min-w-[19rem] xl:block">
                                <div
                                     class="text-base-content sticky top-24 max-h-[calc(100vh-8rem)] w-[19rem] overflow-y-auto scrollbar-hidden">
                                    <x-converge::table-of-contents />
                                    {{-- Carbon ADS --}}
                                    <div class="rounded-box overflow-hidden bg-transparent p-4">
                                        {{ intercept(\Converge\Enums\Interceptor::AFTER_TOC_CARBON_ADS) }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {{-- FOOTER --}}
                <div class="">
                    @if (filled(converge()->getFooter()))
                        <div class="border-base-300 bg-base-200 border-t">
                            {!! converge()->getFooter() !!}
                        </div>
                    @else
                        @include('converge::components.layout.partials.index.footer')
                    @endif
                    <x-converge::brand-footer />
                </div>
            </main>
        </div>
    </div>
</x-converge::layout.base>
