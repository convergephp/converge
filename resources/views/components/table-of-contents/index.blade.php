@props(['headings' => []])
<div>
    {{-- HEADER SECTION --}}
    <div class="text-base-content flex items-center space-x-2 py-2 text-xs font-medium">
        <svg class="h-3 w-3" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor"
            stroke-width="2" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.44434 12.6665H13.5554" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M2.44434 3.3335H13.5554" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M2.44434 8H7.33323" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg><span>On this page</span>
    </div>
    <div 
        class="ml-2 mt-4 max-h-[calc(100vh-3rem)] text-sm" 
        x-data="tableOfContent"
    >
        <x-converge::table-of-contents.ul :$headings />
    </div>
</div>
