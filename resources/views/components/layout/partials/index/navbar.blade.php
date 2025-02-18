 @php
     $hasVersions = count(app('converge')->getUiVersions());
 @endphp

 <div id="navbar" class="fixed top-0 z-30 w-full lg:sticky">
     <div id="navbar-transition"
         class="absolute flex-none w-full h-full transition-colors duration-500 border-b backdrop-blur border-base-300 supports-backdrop-blur:bg-base-200/60">
     </div>

     <div class="relative px-1 mx-auto max-w-[88rem]">
         <div class="">
             <div class="relative">
                 <div class="flex items-center h-16 min-w-0 px-4 lg:px-6">
                     <div class="relative flex items-center flex-1 h-full min-w-0 gap-x-2 lg:gap-x-4 ">
                         {{-- BRAND --}}
                         <div
                             class="flex items-center justify-between flex-grow lg:flex-grow-0 lg:justify-start gap-x-4">
                             <x-converge::logo />

                             {{-- VERSON --}}
                             @if ($hasVersions)
                                 <x-converge::versions />
                             @endif
                         </div>

                         {{-- SEARCH BUTTON --}}
                         <div class="text-center lg:flex-grow lg:block">
                             <x-converge::search />
                         </div>

                         <div class="relative items-center justify-end hidden ml-auto lg:flex">

                             {{-- LINKS --}}
                             <nav class="text-sm lg:text-base">
                                 <ul class="flex items-center space-x-6">
                                     <li>
                                         <a href="/docs" class="font-medium btn btn-sm btn-primary whitespace-nowrap"
                                             target="_blank">Sponsor converge</a>
                                     </li>
                                 </ul>
                             </nav>

                             {{-- THEM SWITCHER --}}
                         </div>
                         <div class="items-center max-w-min">
                             <x-converge::theme-switcher class="" />
                         </div>
                     </div>
                 </div>

                 <div class="flex items-center gap-0 py-2 h-14 lg:hidden">
                     {{-- OPEN AND CLOSE SIDEBAR --}}
                     <button type="button" class="btn btn-sm btn-ghost text-base-content"><span
                             class="sr-only">Navigation</span>
                         <x-converge::icon icon="bars-4" class="size-5" />
                     </button>

                     {{-- BREADCRUMBS --}}
                     <div class="flex-grow">
                         <x-converge::breadcrumbs :breadcrumbs="[
                             '/dashboard' => 'Dashboard',
                             '/dashboard/users' => 'Users',
                             '/dashboard/users/create' => 'Create User',
                         ]" />
                     </div>
                 </div>
             </div>
         </div>
     </div>
 </div>
