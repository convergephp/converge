<div class="absolute px-3 overflow-y-auto bg-transparent border-l border-l-gray-600/10">
    {{-- HEADER SECTION --}}
    <div
        class="flex items-center w-full h-10 px-2 transition-colors duration-500 bg-transparent border-b border-b-slate-500/10 supports-backdrop-blur:bg-background-light/60 dark:bg-transparent backdrop-blur">
        <span class="flex items-center text-lg font-semibold text-gray-800 dark:text-white gap-x-2"> <x-converge::icon
                icon="toc-icon" /> On this page</span>
    </div>
    {{-- TOC SECTION --}}

    <div class="mt-4 ml-2  text-sm max-h-[calc(100vh-3rem)]" x-html="$data.tableOfContent"></div>
    {{-- UNDER TOC SECTION --}}
    <div>
        {{-- Pubs here --}}
    </div>
</div>
