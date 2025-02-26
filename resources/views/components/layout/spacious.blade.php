@php
$hasVersions = count(\Fluxtor\Converge\converge()->getUiVersions());
@endphp

<x-converge::layout.base>
    <div x-data="{ sidebarOpen: false }">
        {{-- Navbar --}}
        <nav class="fixed top-0 z-50 w-full transition-colors duration-500 border-b border-base-300 backdrop-blur supports-backdrop-blur:bg-base-200/60">
            <div class="z-50 px-2 py-3 lg:px-8">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-x-2">
                        {{-- open and close sidebar --}}
                        <button x-on:click="sidebarOpen = !sidebarOpen"
                                type="button"
                                class="inline-flex btn btn-ghost text-base-content lg:hidden">
                            <span class="sr-only">Toggle sidebar</span>
                            <x-converge::icon icon="bars-4"
                                              class="size-5" />
                        </button>

                        {{-- BRAND AND VERSION --}}
                        <div class="flex items-center justify-between flex-grow lg:flex-grow-0 lg:justify-start gap-x-4">
                            <x-converge::logo />

                            @if ($hasVersions)
                            <x-converge::versions />
                            @endif
                        </div>
                    </div>

                    <div class="flex items-center justify-end flex-grow">
                        {{-- SEARCH BUTTON --}}
                        <div class="text-center">
                            <x-converge::search />
                        </div>

                        {{-- NAVBARE ITEMS --}}
                        <nav class="items-center hidden text-sm lg:flex lg:text-base">
                            <x-converge::menu-items />
                        </nav>

                        {{-- THEME SWITCHER --}}
                        <div class="items-center max-w-min">
                            <x-converge::theme-switcher class="" />
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
            <aside class="fixed top-0 left-0 z-40 h-screen transition-transform border-r w-72 lg:translate-x-0 bg-base-200 border-base-300"
                   x-bind:class="sidebarOpen ? 'translate-x-0' : '-translate-x-full'">
                <div class="flex flex-col h-full">
                    {{-- Sidebar spacing for navbar --}}
                    <div class="h-20"></div>
                    {{-- Sidebar content --}}
                    <div id="sidebar" class="flex-1 px-4 overflow-y-auto">
                        <x-converge::sidebar />
                    </div>
                </div>
            </aside>


            {{-- Main Content Area --}}
            <main class="flex-1 w-full transition-all duration-300 lg:pl-72">
                <div class="container mx-auto">
                    {{-- Content Grid --}}
                    <div class="xl:grid mx-auto xl:grid-cols-[1fr,19rem] gap-4 px-4 pt-24 pb-12">
                        <div class="gap-4 mx-auto xl:gap-6 xl:flex ">
                            {{-- MAIN CONTENT --}}
                            <div class="mx-auto md:pb-24">
                                <div class="mx-auto">
                                    {{ $slot }}
                                </div>
                            </div>

                            {{-- TABLE OF CONTENT --}}
                            <div class="hidden min-w-[19rem] xl:block">
                                <div class="sticky top-24 w-[19rem] overflow-y-auto text-base-content max-h-[calc(100vh-8rem)]">
                                    <x-converge::table-of-contents />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {{-- FOOTER --}}
                @include('converge::components.layout.partials.index.footer')
            </main>
        </div>
    </div>
</x-converge::layout.base>
