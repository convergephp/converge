@php
    use function Converge\converge;
    use function Converge\has_custom_footer;
    use function Converge\intercept;
    $hasVersions = count(\Converge\converge()->getUiVersions());
    $sidebarItems = $sidebarItems ?? converge()->getSidebarItems();
    $style = Converge\converge()->getTheme()->getSidebarItemStyle();
@endphp

<x-converge::layout.base>
    <nav class="bg-base-200 fixed top-0 z-50 h-16 w-full border-b border-base-300">
        <div class="mx-auto flex h-full w-[95vw] items-center sm:container sm:justify-between md:gap-2">
            <div class="flex items-center gap-2.5 sm:gap-5">
                <button class="ring-offset-background focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground flex h-9 w-9 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 md:hidden"
                        type="button"
                        aria-haspopup="dialog"
                        aria-expanded="false"
                        aria-controls="radix-:Rllb:"
                        data-state="closed">
                    Button
                </button>
                <div class="flex items-center gap-6">
                    <div class="hidden lg:flex"><a class="flex items-center gap-2.5"
                           href="/"><svg xmlns="http://www.w3.org/2000/svg"
                                 width="24"
                                 height="24"
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor"
                                 stroke-width="2"
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                                 class="lucide lucide-command text-muted-foreground h-6 w-6">
                                <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3">
                                </path>
                            </svg>
                            <h2 class="text-md font-code font-bold">AriaDocs</h2>
                        </a></div>
                    <div class="text-muted-foreground hidden items-center gap-4 text-sm font-medium md:flex">
                        <a class="!text-primary flex items-center gap-1 text-[14.5px] font-semibold text-stone-800 sm:text-sm dark:font-medium dark:text-stone-300/85"
                           href="/docs/getting-started/introduction">Documentation</a>
                    </div>
                </div>
            </div>
            <div class="ml-1 flex w-[90%] items-center justify-between sm:w-fit sm:justify-normal sm:gap-3">
                <x-converge::theme-switcher.inline></x-converge::theme-switcher.inline>
            </div>
        </div>
    </nav>

    <main class="mx-auto relative h-auto max-w-5xl overflow-hidden  pt-10 scroll-smooth">
        <div class="flex items-start gap-8">
            <aside class="sticky top-10 hidden h-[93.75vh] w-[20rem] flex-col overflow-y-auto md:flex">
                <div dir="ltr"
                     class="relative overflow-hidden px-2 py-4"
                     style="position:relative;--radix-scroll-area-corner-width:0px;--radix-scroll-area-corner-height:0px">
                    <style>
                        [data-radix-scroll-area-viewport] {
                            scrollbar-width: none;
                            -ms-overflow-style: none;
                            -webkit-overflow-scrolling: touch;
                        }

                        [data-radix-scroll-area-viewport]::-webkit-scrollbar {
                            display: none
                        }
                    </style>
                    <div data-radix-scroll-area-viewport=""
                         class="h-full w-full rounded-[inherit]"
                         style="overflow-x:hidden;overflow-y:hidden">
                        <div style="min-width:100%;display:table">
                            <div class="mt-5 flex flex-col gap-3.5 pb-6 pr-2 text-[14.5px] sm:text-base">
                                <div class="flex w-full flex-col gap-1">
                                    <div data-state="open">
                                        <div data-state="open">
                                            <x-converge::sidebar />
                                            <!-- <div
                                                 class="ml-0.5 mt-2.5 flex flex-col items-start gap-3 text-stone-800 sm:text-sm dark:text-stone-300/85">
                                                <div class="flex flex-col"><a class=""
                                                       href="/docs/getting-started/introduction">Introduction</a></div>
                                                <div class="flex flex-col"><a class=""
                                                       href="/docs/getting-started/installation">Installation</a></div>
                                                <div class="flex flex-col"><a class=""
                                                       href="/docs/getting-started/quick-start-guide">Quick Start
                                                        Guide</a></div>
                                                <div class="flex flex-col"><a class=""
                                                       href="/docs/getting-started/project-structure">Project
                                                        Structure</a></div>
                                                <div class="flex w-full flex-col gap-1">
                                                    <div data-state="closed"><button type="button"
                                                                aria-controls="radix-:Rmsmulb:"
                                                                aria-expanded="false"
                                                                data-state="closed"
                                                                class="w-full pr-5">
                                                            <div
                                                                 class="flex w-full cursor-pointer items-center justify-between">
                                                                <span
                                                                      class="w-[95%] overflow-hidden text-ellipsis text-start"><a
                                                                       class=""
                                                                       href="/docs/getting-started/components">Components</a></span><span
                                                                      class="-mr-1.5 sm:ml-0"><svg
                                                                         xmlns="http://www.w3.org/2000/svg"
                                                                         width="24"
                                                                         height="24"
                                                                         viewBox="0 0 24 24"
                                                                         fill="none"
                                                                         stroke="currentColor"
                                                                         stroke-width="2"
                                                                         stroke-linecap="round"
                                                                         stroke-linejoin="round"
                                                                         class="lucide lucide-chevron-right h-[0.9rem] w-[0.9rem]">
                                                                        <path d="m9 18 6-6-6-6"></path>
                                                                    </svg></span>
                                                            </div>
                                                        </button>
                                                        <div data-state="closed"
                                                             id="radix-:Rmsmulb:"
                                                             hidden=""></div>
                                                    </div>
                                                </div>
                                                <div class="flex flex-col"><a
                                                       class="text-primary font-semibold dark:font-medium"
                                                       href="/docs/getting-started/i18n">Internationalization</a></div>
                                                <div class="flex flex-col"><a class=""
                                                       href="/docs/getting-started/algolia-search">Algolia Search<span
                                                              class="mx-2 rounded-md bg-blue-500 px-1.5 py-0.5 text-xs !font-normal text-white dark:bg-blue-700">New</span></a>
                                                </div>
                                                <div class="flex flex-col"><a class=""
                                                       href="/docs/getting-started/themes">Themes</a></div>
                                                <div class="flex flex-col"><a class=""
                                                       href="/docs/getting-started/customize">Customize</a></div>
                                            </div> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
            <div class="flex-[5.25]">
                <div class="flex items-start gap-10">
                    <div class="mx-auto flex-[4.5] py-10">
                        <div class="mx-auto w-full">
                            <x-converge::table-of-contents />

                            {{ $slot }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</x-converge::layout.base>
