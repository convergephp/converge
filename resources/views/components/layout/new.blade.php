<?php
use function Fluxtor\Converge\converge;
use function Fluxtor\Converge\has_custom_footer;
use function Fluxtor\Converge\intercept;
$hasVersions = count(\Fluxtor\Converge\converge()->getUiVersions());
?>

<x-converge::layout.base>
    {{-- BACKGROUND EFFECT --}}
    @include('converge::partials.background-effets')

    <div x-data="{
        sideBarOpen: false
    }"
         class="w-full">
        <div class="h-full lg:ml-72">

            <header class="contents lg:pointer-events-none lg:fixed  lg:inset-0 lg:z-40 lg:flex">
                <div
                     class="contents lg:pointer-events-auto lg:block lg:w-72 bg-transparent lg:overflow-y-auto lg:border-r lg:border-zinc-900/10 lg:px-6 lg:pb-8 lg:pt-4 lg:dark:border-white/10">

                    <!-- DISCKTOP LOGO AND VERSION -->
                    <div class="hidden justify-between lg:flex">
                        <!-- logo -->
                        <x-converge::logo />

                        <!-- versions -->
                        @if ($hasVersions)
                            <div class="ml-4">
                                <x-converge::versions />
                            </div>
                        @endif
                    </div>

                    <div class="backdrop-blur-xs bg-base-200 fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12  px-4 transition sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-72 dark:bg-zinc-900/[var(--bg-opacity-dark)] dark:backdrop-blur-sm"
                         style="--bg-opacity-light: 0.5; --bg-opacity-dark: 0.2;">

                        {{-- Bottom border --}}
                        <div class="bg-gray-400/20  absolute inset-x-0 top-full h-px transition">
                        </div>

                        {{-- Mobile logo and toggle sidebar button --}}
                        <div class="flex items-center gap-2 lg:hidden">
                            <button x-on:click="sideBarOpen = !sideBarOpen"
                                    type="button"
                                    class="btn btn-square btn-sm bg-transparent text-base-content p-0 mt-0"
                                    aria-label="Toggle navigation">
                                <svg viewBox="0 0 10 9"
                                     fill="none"
                                     stroke-linecap="round"
                                     aria-hidden="true"
                                     class="w-2.5 stroke-base-content">
                                    <path d="M.5 1h9M.5 8h9M.5 4.5h9"></path>
                                </svg>
                            </button>

                            <div class="flex">
                                <!-- logo -->
                                <x-converge::logo />
                            </div>
                        </div>

                        {{-- disktop navbare  --}}
                        <div class="flex w-full items-center justify-end gap-5">
                            <x-converge::search class="!bg-base-300" />

                            {{-- Navigation items showing on desktop only --}}
                            <nav class="hidden md:block">
                                <x-converge::menu-items />
                            </nav>

                            {{-- Divider --}}
                            <div class="hidden md:block md:h-5 md:w-px md:bg-zinc-900/10 md:dark:bg-white/15"></div>

                            {{-- Theme switcher --}}
                            <x-converge::theme-switcher.inline />
                        </div>
                    </div>

                    <nav x-data="{ isDesktop: window.innerWidth >= 1024 }"
                         x-init="window.addEventListener('resize', () => isDesktop = window.innerWidth >= 1024)"
                         x-show="isDesktop || sideBarOpen"
                         @click.away="sideBarOpen = false"
                         :class="isDesktop ? 'lg:mt-10 lg:block bg-transparent' :
    'fixed bottom-0 left-0 overflow-y-auto  top-14 z-40 w-full bg-base-200 px-4 pb-4 pt-6 border-r border-base-300 min-[416px]:max-w-sm sm:px-6 sm:pb-10'">
                        <div class="md:hidden">
                            <x-converge::menu-items />
                        </div>
                        <x-converge::sidebar.items />
                    </nav>
                </div>
            </header>

            <div class="relative flex h-full flex-col px-2 md:px-0 pt-14">
                {{-- Content --}}
                <main class="flex-auto flex gap-2">
                    <div class="mx-auto flex h-full  flex-col overflow-y-hidden  pb-10 pt-16">
                        {{ $slot }}
                    </div>
                    {{-- TABLE OF CONTENT --}}
                    <div class="hidden min-w-[19rem] xl:block">
                        <div class="text-base-content sticky top-24 max-h-[calc(100vh-8rem)] w-[19rem] overflow-y-auto">
                            <x-converge::table-of-contents />
                            {{-- Carbon ADS --}}
                            <div class="rounded-box overflow-hidden bg-transparent p-4">
                                {{ intercept(\Fluxtor\Converge\Enums\Interceptor::AFTER_TOC_CARBON_ADS) }}
                            </div>
                        </div>
                    </div>
                </main>

                {{-- Footer --}}
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
            </div>
        </div>
    </div>

</x-converge::layout.base>
