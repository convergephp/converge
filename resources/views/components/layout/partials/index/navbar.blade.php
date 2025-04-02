 @php
     $hasVersions = count(\Fluxtor\Converge\converge()->getUiVersions());
 @endphp

 <div id="navbar"
      class="fixed top-0 z-30 w-full lg:sticky">
     <div id="navbar-transition"
          class="border-base-300 supports-backdrop-blur:bg-background-light/60 absolute h-full w-full flex-none border-b backdrop-blur transition-colors">
     </div>

     <div class="relative mx-auto max-w-[88rem]">
         <div class="">
             <div class="relative">
                 <div class="flex h-16 min-w-0 items-center px-4">
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

                         {{-- sidebare toggle --}}
                         <button type="button"
                                 x-on:click="$dispatch('open-sidebar')"
                                 class="btn btn-ghost btn-sm text-base-content inline-flex lg:hidden"><span
                                   class="sr-only">Navigation</span>
                             <x-converge::icon icon="bars-4"
                                               class="size-5" />
                         </button>

                         {{-- SEARCH BUTTON --}}
                         <div class="text-center lg:block lg:flex-grow">
                             <x-converge::search />
                         </div>

                         <div class="relative ml-auto items-center justify-end lg:flex">

                             <nav class="hidden items-center text-sm lg:flex lg:text-base">
                                 <x-converge::menu-items />
                             </nav>

                             {{-- THEM SWITCHER --}}
                             <div class="max-w-min items-center">
                                 <x-converge::theme-switcher.inline class="" />
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </div>
 </div>
