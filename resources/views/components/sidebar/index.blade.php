<div
    class="aside-dashboard -translate-x-80c fixed inset-0 left-[max(0px,calc(50%-45rem))] right-auto top-[3.8125rem] hidden w-[15rem] overflow-y-auto pb-10 pl-8 pr-6 lg:block">
    <nav class="relative lg:text-sm lg:leading-6" id="nav">
        <div class="sticky top-0 -ml-2 dark:bg-black bg-gray-100 z-50">
            <div class="h-10 bg-gradient-to-b from-white dark:from-black dark:to-white/5  z-50">
                <div class="h-10  bg-gray-100 dark:bg-black">
                </div>
            </div>
            <livewire:global-search/>
            <div class="h-4 bg-gray-100 dark:bg-black dark:to-transparent "></div>
        </div>
        <x-aside-titles :categories="$categories" />
    </nav>
</div>