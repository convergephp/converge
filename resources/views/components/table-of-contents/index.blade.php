<div class="px-3 border-dashed bg-transparent border-l-5 border-l-gray-600/10 overflow-scroll max-h-[calc(100vh-40px)]">
    {{-- HEADER SECTION --}}
    <div
        class="sticky top-0 flex items-center w-full h-10 px-2 transition-colors duration-500 bg-transparent border-b rounded-lg border-b-slate-500/10 supports-backdrop-blur:bg-background-light/60 dark:bg-transparent backdrop-blur">
        <span class="flex items-center text-lg font-semibold text-gray-800 dark:text-white gap-x-2"> <svg width="16"
                height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"
                xmlns="http://www.w3.org/2000/svg" class="w-3 h-3">
                <path d="M2.44434 12.6665H13.5554" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M2.44434 3.3335H13.5554" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M2.44434 8H7.33323" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg> On this page</span>
    </div>

    {{-- DYNAMIQUE CONTENT SECTION --}}
    <div class="mt-4 ml-2 text-sm" x-html="$data.tableOfContent"></div>

    {{-- PUBS SECTION --}}
    <div>
        {{-- Pubs here --}}
    </div>
</div>
