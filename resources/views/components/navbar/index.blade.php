@php
    $hasVersions = count(app('converge')->getUiVersions());
@endphp
<div class="relative mx-auto bg-transparent border-b border-b-slate-500/10">
    {{-- NAVBARE --}}
    <div class="border-b border-b-slate-500/10">
        <nav class="flex items-center h-16 min-w-0 mx-auto max-w-7xl">
            {{-- BRAND --}}
            <div class="z-20 flex items-center justify-center">
                <x-converge::logo />
                @if ($hasVersions)
                    <x-converge::versions />
                @endif
            </div>

            {{-- SEARCH COMPENENT --}}
            <div class="items-center flex-grow">
                <div class="max-w-sm mx-auto">
                    <x-converge::search />
                </div>
            </div>

            {{-- ACTIONS --}}
            <div class="flex items-center">

                {{-- NAV ITEMS --}}
                <nav class="hidden text-sm font-semibold leading-6 lg:block text-slate-700 dark:text-slate-200">
                    <ul class="flex items-center space-x-8">
                        <li>
                            <a @class([
                                'dark:hover:primary/90 rounded-md dark:bg-transparent transition-colors duration-200 hover:text-primary',
                            ]) href="https://fluxtor.dev/components">components</a>
                        </li>
                    </ul>
                </nav>

                {{-- THE SWITCHER --}}
                <x-converge::theme-switcher class="border-l border-slate-200 dark:border-slate-800" />

                {{-- USER DROPDOWN --}}
                <div class="relative items-center ml-auto space-x-2 lg:flex">
                    <a href="#">
                        <span class="absolute top-0 flex w-3 h-3 right-2">
                            <span
                                class="absolute inline-flex w-full h-full bg-purple-500 rounded-full opacity-75 animate-ping"></span>
                            <span class="relative inline-flex w-3 h-3 bg-purple-500 rounded-full"></span>
                        </span>
                        <x-converge::icon icon="user-circle" class="mr-3 size-6" />
                    </a>
                </div>
            </div>
        </nav>
    </div>
    {{-- BREADCRUMBS --}}
    <div x-data class="flex md:hidden items-center  w-full h-12 mx-auto space-x-2 transition-colors duration-500 max-w-7xl">
        {{-- open SIDEBARE --}}
        <button x-ref="button" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button"
            class="inline-flex items-center justify-center mx-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span class="sr-only">Open sidebar</span>
            <x-converge::icon icon="bars-4" class="size-5" />
        </button>

        {{-- BREADCRUMBS LINKS --}}
        <nav class="flex" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li class="inline-flex items-center">
                    <a href="#"
                        class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        Home
                    </a>
                </li>
                <li>
                    <div class="flex items-center">
                        <x-converge::icon icon="chevron-right" class="font-extrabold size-4" />
                        <a href="#"
                            class="text-sm font-medium text-gray-700 ms-1 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Projects</a>
                    </div>
                </li>
            </ol>
        </nav>
    </div>
</div>
</div>
