@php
    $hasVersions = count(app('converge')->getUiVersions());
@endphp
<nav class="dark:bg-white/[0.03] bg-gray-100 text-white backdrop-blur-2xl z-40 sticky top-0 rounded-xl">
    <div
        class="supports-backdrop-blur:bg-white/60 z-40 w-full flex-none  border-lg backdrop-blur transition-colors duration-500 dark:border-slate-50/[0.06] bg-transparent lg:z-50 lg:border-b lg:border-slate-900/10">
        <div class="max-w-8xl mx-auto">
            <div class="mx-4 border-b py-4 dark:border-slate-300/10 lg:mx-0 lg:border-0 lg:px-8">
                <div class="relative flex items-center">
                    <x-converge::logo/>
                    @if($hasVersions)
                        <x-converge::versions/>
                    @endif
                    <div class="relative ml-auto space-x-2 hidden items-center lg:flex">
                        <nav class="text-sm font-semibold leading-6 text-slate-700 dark:text-slate-200">
                            <ul class="flex space-x-8">
                                <li>
                                    <a 
                                        @class(["dark:hover:primary/90 rounded-md dark:bg-transparent x px-2 py-1 transition-colors duration-200 hover:text-primary"])
                                        href="https://fluxtor.dev/components">components</a>
                                </li>    
                            </ul>
                        </nav>
                        <x-converge::theme-switcher class="border-l border-slate-200 dark:border-slate-800"/>

                        <a href="#">
                            <span class="absolute top-0 right-0 flex w-3 h-3">
                                <span class="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-purple-500"></span>
                                <span class="relative inline-flex w-3 h-3 rounded-full bg-purple-500"></span>
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                class="w-8 h-8 stroke-slate-600 group-hover:stroke-slate-500">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                        </a>                        
                    </div>
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
                        <span class="absolute top-0 flex w-3 h-3 -right-1">
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
    <div>

        {{-- BREADCRUMBS --}}
        <div class="lg:px-[18rem]  flex items-center w-full h-12 px-4 space-x-2 transition-colors duration-500 "
            x-data="{ open: false }">
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
                            <x-converge::icon icon="chevron-right" class="size-4" />
                            <a href="#"
                                class="text-sm font-medium text-gray-700 ms-1 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Projects</a>
                        </div>
                    </li>
                </ol>
            </nav>
        </div>
    </div>
</nav>
