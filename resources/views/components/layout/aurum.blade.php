<?php
use function Fluxtor\Converge\converge;
use function Fluxtor\Converge\has_custom_footer;
use function Fluxtor\Converge\intercept;
$hasVersions = count(\Fluxtor\Converge\converge()->getUiVersions());
?>

<x-converge::layout.base>
    {{-- DECORATIVE BACKGROUND EFFECTS --}}
    @include('converge::partials.background-effets')

    {{-- MAIN LAYOUT CONTAINER --}}
    <div x-data="{
        sideBarOpen: false
    }"
         class="w-full">
        {{-- Add overlay for mobile sidebar --}}
        <div x-show="sideBarOpen"
             class="bg-base-200/80 fixed inset-0 z-30 lg:hidden"
             x-on:click="sideBarOpen = false"></div>

        <div class="h-full lg:ml-72">
            {{-- HEADER SECTION --}}
            <header class="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex">
                {{-- DESKTOP SIDEBAR CONTAINER --}}
                <div
                     class="contents border-r scrollbar-hidden border-gray-400/20 bg-transparent lg:pointer-events-auto lg:block lg:w-72 lg:overflow-y-auto lg:pb-8 lg:pt-4">
                    {{-- DESKTOP LOGO AND VERSION SELECTOR --}}
                    <div class="hidden justify-between lg:flex px-0 lg:px-4">
                        {{-- Logo component --}}
                        <x-converge::logo />

                        {{-- Version selector (conditional) --}}
                        @if ($hasVersions)
                            <div class="ml-4">
                                <x-converge::versions />
                            </div>
                        @endif
                    </div>

                    {{-- TOP NAVIGATION BAR --}}
                    <div class="backdrop-blur-xs bg-base-200 fixed inset-x-0 top-0 z-40 flex h-14 items-center justify-between gap-12 px-4 transition sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-72 dark:bg-zinc-900/[var(--bg-opacity-dark)] dark:backdrop-blur-sm"
                         style="--bg-opacity-light: 0.5; --bg-opacity-dark: 0.2;">

                        {{-- Bottom border for navbar --}}
                        <div class="absolute inset-x-0 top-full h-px bg-gray-400/20 transition"></div>

                        {{-- MOBILE LOGO AND SIDEBAR TOGGLE --}}
                        <div class="flex items-center gap-2 lg:hidden w-full">
                            {{-- Hamburger menu button --}}
                            <button x-on:click="sideBarOpen = !sideBarOpen"
                                    type="button"
                                    class="shadow-xs btn-sm btn btn-square bg-base-300/50 text-base-content hover:bg-base-300 border-base-300 border transition-all duration-300 lg:hidden"
                                    aria-label="Toggle navigation">
                                {{-- Icon when menu is closed --}}
                                <svg x-show="!sideBarOpen"
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
                                <svg x-show="sideBarOpen"
                                     class="h-4 w-4"
                                     xmlns="http://www.w3.org/2000/svg"
                                     fill="none"
                                     viewBox="0 0 24 24"
                                     stroke="currentColor"
                                     style="display: none;">
                                    <path stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-width="2"
                                          d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {{-- Mobile logo --}}
                            <div class="flex">
                                <x-converge::logo />
                            </div>
                        </div>

                        {{-- DESKTOP NAVBAR COMPONENTS --}}
                        <div class="flex w-full items-center justify-end gap-4">
                            {{-- Search component --}}
                            <x-converge::search class="!bg-base-300" />

                            {{-- Navigation items - desktop only --}}
                            <nav class="hidden md:block">
                                <x-converge::menu-items />
                            </nav>

                            {{-- Visual divider --}}
                            <div class="block h-5 w-px bg-gray-400/20"></div>

                            {{-- Theme switcher component --}}
                            <x-converge::theme-switcher.inline />
                        </div>
                    </div>

                    {{-- SIDEBAR NAVIGATION --}}
                    <nav x-data="{ isDesktop: window.innerWidth >= 1024 }"
                         x-init="window.addEventListener('resize', () => isDesktop = window.innerWidth >= 1024)"
                         x-show="isDesktop || sideBarOpen"
                         x-on:click.away="sideBarOpen = false"
                         id="sidebar"
                         x-bind:class="isDesktop ? 'lg:mt-10 scrollbar-hidden lg:block bg-transparent' :
    'fixed bottom-0 left-0 overflow-y-auto scrollbar-hidden top-14 z-40 w-full bg-base-200 pb-4 pt-6 border-r border-base-300 min-[416px]:max-w-sm sm:pb-10'">
                        {{-- Sidebar navigation items --}}
                        <x-converge::sidebar />
                    </nav>
                </div>
            </header>

            {{-- MAIN CONTENT AREA --}}
            <div class="relative flex h-full flex-col px-2 pt-14 md:px-0">
                {{-- Content section --}}
                <main class="flex flex-auto gap-2">
                    {{-- Main content slot --}}
                    <div class="mx-auto flex h-full flex-col overflow-hidden pb-10 pt-16 md:overflow-visible">
                        {{ $slot }}
                    </div>

                    {{-- TABLE OF CONTENTS - Desktop only --}}
                    <div class="hidden min-w-[19rem] xl:block">
                        <div
                             class="text-base-content sticky top-24 max-h-[calc(100vh-8rem)] w-[19rem] overflow-y-auto scrollbar-hidden">
                            <x-converge::table-of-contents />

                            {{-- Carbon ads section --}}
                            <div class="rounded-box overflow-hidden bg-transparent p-4">
                                {{ intercept(\Fluxtor\Converge\Enums\Interceptor::AFTER_TOC_CARBON_ADS) }}
                            </div>
                        </div>
                    </div>
                </main>

                {{-- FOOTER SECTION --}}
                <div class="">
                    {{-- Conditional custom footer --}}
                    @if (filled(converge()->getFooter()))
                        <div class="border-base-300 bg-base-200 border-t">
                            {!! converge()->getFooter() !!}
                        </div>
                    @else
                        @include('converge::components.layout.partials.index.footer')
                    @endif

                    {{-- Brand footer component --}}
                    <x-converge::brand-footer />
                </div>
            </div>
        </div>
    </div>
</x-converge::layout.base>
