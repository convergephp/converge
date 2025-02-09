@php
    $hasVersions = count(app('converge')->getUiVersions());
@endphp

<div
    class="sticky flex flex-col w-full transition-colors duration-500 bg-transparent border-b border-b-slate-500/10 supports-backdrop-blur:bg-background-light/60 dark:bg-transparent backdrop-blur">
    <div
        class="flex items-center w-full h-16  min-w-0 px-4 mx-auto z-10  lg:px-[18rem]  border-b border-gray-500/5 dark:border-gray-300/[0.06]">
        <nav class="relative flex items-center flex-1 h-full min-w-0 gap-x-4">

            {{-- BRAND --}}
            <div class="z-20">
                <x-converge::logo />
                @if ($hasVersions)
                    <x-converge::versions />
                @endif
            </div>

            {{-- SEARCH COMPENENT --}}
            <div class="items-center flex-grow">
                <div class="max-w-sm mx-auto">
                    <x-search />
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

                {{-- THEM SWITCHER --}}
                <x-converge::theme-switcher class="border-l border-slate-200 dark:border-slate-800" />

                {{-- USER DROPDOWN --}}
                <div class="relative items-center ml-auto space-x-2 lg:flex">
                    <a href="#">
                        <span class="absolute top-0 right-0 flex w-3 h-3">
                            <span
                                class="absolute inline-flex w-full h-full bg-purple-500 rounded-full opacity-75 animate-ping"></span>
                            <span class="relative inline-flex w-3 h-3 bg-purple-500 rounded-full"></span>
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            class="w-8 h-8 stroke-slate-600 group-hover:stroke-slate-500">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </a>
                </div>

            </div>
        </nav>
    </div>
    <div>

        {{-- BREADCRUMBS --}}
        <div class="lg:px-[18rem]  flex items-center w-full h-12 px-4 space-x-2 transition-colors duration-500 "
            x-data="{ open: false }">
            {{-- open SIDEBARE --}}
            <button x-ref="button" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button"
                class="inline-flex items-center text-sm text-gray-500 rounded-lg ms-3 sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span class="sr-only">Open sidebar</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
                    </path>
                </svg>
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
                            <svg class="w-3 h-3 mx-1 text-gray-400 rtl:rotate-180" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <a href="#"
                                class="text-sm font-medium text-gray-700 ms-1 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Projects</a>
                        </div>
                    </li>
                </ol>
            </nav>
        </div>
    </div>
