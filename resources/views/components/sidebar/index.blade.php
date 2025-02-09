@php
    $clusters = app('converge')->getAllClusters();
@endphp
<div
    class="aside-dashboard fixed inset-0 left-[max(0px,calc(50%-40rem))] right-auto top-[3.8125rem] hidden w-[18rem] overflow-y-auto pb-10 pl-8 pr-4 lg:block">
    <nav class="relative lg:text-sm lg:leading-6" id="nav">
        <div class="sticky top-0 -ml-2 dark:bg-gray-950 bg-gray-50 z-50">
            <div class="h-10 bg-gradient-to-b from-white dark:from-gray-950 dark:to-white/5  z-50">
                <div class="h-10  bg-gray-50 dark:bg-gray-950">
                </div>
            </div>
            <div 
                class="fle items-center w-full" 
            >
            <x-search/>
        </div>
            <div class="h-4 bg-gray-50 dark:bg-gray-950 dark:to-transparent "></div>
        </div>
        @if (filled($clusters))
            <x-converge::clusters :$clusters />
        @endif
        <x-converge::sidebar.items />
    </nav>
</div>