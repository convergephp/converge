<div class="px-3 border-dashed  bg-transparent border-l-5 border-l-gray-600/10 overflow-scroll max-h-[calc(100vh-1rem]">
    {{-- HEADER SECTION --}}
    <div
        class="sticky top-0 flex items-center w-full h-10 px-2 transition-colors duration-500 bg-transparent border-b  border-b-slate-500/10 supports-backdrop-blur:bg-background-light/60 dark:bg-transparent backdrop-blur">
        <span class="flex items-center text-lg font-semibold text-gray-800 dark:text-white gap-x-2"> <x-converge::icon icon="toc-icon"/>  On this page</span>
        </div>
    {{-- TOC SECTION --}}

    <div class="mt-4 ml-2 text-sm"  x-html="$data.tableOfContent"></div>
    {{-- UNDER TOC SECTION --}}
    <div>
        {{-- Pubs here --}}
    </div>
</div>
