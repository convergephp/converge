<x-converge::layout>
    <div class="max-w-8xl  mx-auto px-4 sm:px-6 md:px-8">
        <div class="">
            <x-converge::sidebar/>
            <div
                class="lg:pl-[17.125rem] scroll-m-20"
                x-data="tableOfContents"
                x-on:scroll.window="handlePermalinks"
            >
                <div data-doc class="mx-auto stick max-w-3xl pt-10 xl:ml-0 xl:mr-[13.5rem] xl:max-w-none xl:pr-14">
                    {{ $slot }}
                </div>
                <x-converge::table-of-contents />
            </div>
        </div>
        
    </div>
</x-converge::layout>
