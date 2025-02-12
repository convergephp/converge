 @php
     $hasVersions = count(app('converge')->getUiVersions());
 @endphp

 <div id="navbar" class="fixed top-0 z-30 w-full lg:sticky">
     <div id="navbar-transition"
         class="absolute w-full h-full backdrop-blur flex-none transition-colors duration-500 border-b border-gray-500/5 dark:border-gray-300/[0.06] supports-backdrop-blur:bg-background-light/60 dark:bg-transparent">
     </div>
     <div class="relative  mx-auto max-w-[88rem]">
         <div class="">
             <div class="relative">
                 <div class="flex items-center h-16 min-w-0 px-4 lg:px-6">
                     <div
                         class="h-full relative flex-1 flex items-center gap-x-4 min-w-0 border-b border-gray-500/5 dark:border-gray-300/[0.06] lg:border-none">
                         {{-- BRAND --}}
                         <div class="flex items-center flex-1 gap-x-4">
                             <x-converge::logo />

                             {{-- VERSON --}}
                             @if ($hasVersions)
                                 <x-converge::versions />
                             @endif
                         </div>

                         {{-- SEARCH BUTTON --}}
                         <div class="flex-grow hidden max-w-md mx-auto lg:block">
                             <x-converge::search />
                         </div>

                         <div class="relative items-center justify-end flex-1 hidden ml-auto lg:flex">

                             {{-- LINKS --}}
                             <nav class="text-sm">
                                 <ul class="flex items-center space-x-6">
                                     <li>
                                         <a href="/docs"
                                             class="font-medium text-gray-600 whitespace-nowrap hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                                             target="_blank">Sponsor converge</a>
                                     </li>
                                 </ul>
                             </nav>

                             {{-- THEM SWITCHER --}}
                         </div>
                         <div class="flex items-center">
                             <x-converge::theme-switcher class="" />
                         </div>
                     </div>
                 </div>

                 <div class="flex items-center gap-3 px-5 py-4 h-14 lg:hidden">
                     {{-- OPEN AND CLOSE SIDEBAR --}}
                     <button type="button"
                         class="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"><span
                             class="sr-only">Navigation</span>
                         <x-converge::icon icon="bars-4" class="size-5" />
                     </button>

                     {{-- SEARCH BUTTON VISIBLE ON SMALL SCREENS --}}
                     <div class="flex-grow">
                         <x-converge::search />
                     </div>
                 </div>
             </div>
         </div>
     </div>
 </div>
