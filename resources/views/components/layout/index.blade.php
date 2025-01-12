<x-converge::layout.base>
    <div>
        <x-navbar />
        <x-converge::sidebar :$navItems />

        <div class="lg:pl-[10.125rem]" x-on:scroll.window="handlePermalinks" x-data="tableOfContents">
            <div class="mx-auto max-w-3xl pt-10 xl:ml-0 xl:mr-[10.5rem] xl:max-w-none xl:pr-12"></div>
            {{ $slot }}
            <x-converge::table-of-contents />
        </div>
    </div>
</x-converge::layout.base>
