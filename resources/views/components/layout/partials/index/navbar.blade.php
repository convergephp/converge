 @php
     $hasVersions = count(\Fluxtor\Converge\converge()->getUiVersions());
 @endphp

 <div id="navbar"
      class="fixed top-0 z-30 w-full lg:sticky">
     <div id="navbar-transition"
          class="backdrop-blur-3xl border-base-300 supports-backdrop-blur:bg-base-200/60 absolute h-full w-full flex-none border-b transition-colors duration-500">
     </div>

     <div class="relative mx-auto max-w-[88rem] px-1">
         <div class="">
             <div class="relative">
                 <div class="flex h-16 min-w-0 items-center px-4 lg:px-6">
                     <div class="relative flex h-full min-w-0 flex-1 items-center gap-x-2 lg:gap-x-4">
                         {{-- BRAND --}}
                         <div
                              class="flex flex-grow items-center justify-between gap-x-4 lg:flex-grow-0 lg:justify-start">
                             <x-converge::logo />

                             {{-- VERSON --}}
                             @if ($hasVersions)
                                 <x-converge::versions />
                             @endif
                         </div>

                         {{-- SEARCH BUTTON --}}
                         <div class="text-center lg:block lg:flex-grow">
                             <x-converge::search />
                         </div>

                         <div class="relative ml-auto hidden items-center justify-end lg:flex">

                             <nav class="flex items-center text-sm lg:text-base">
                                 <x-converge::menu-items />
                             </nav>

                             {{-- THEM SWITCHER --}}
                         </div>
                         <div class="max-w-min items-center">
                             <x-converge::theme-switcher class="" />
                         </div>
                     </div>
                 </div>

                 <div x-data
                      class="flex h-14 items-center gap-0 py-2 lg:hidden">
                     {{-- OPEN AND CLOSE SIDEBAR --}}
                     <button type="button"
                             x-on:click="$dispatch('open-sidebar')"
                             class="btn btn-ghost text-base-content inline-flex lg:hidden"><span
                               class="sr-only">Navigation</span>
                         <x-converge::icon icon="bars-4"
                                           class="size-5" />
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
