<x-converge::layout>
    <div class="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
        <x-converge::sidebar/>
        <div class="lg:pl-[15.125rem]">
            <div class="mx-auto max-w-3xl pt-10 xl:ml-0 xl:mr-[10.5rem] xl:max-w-none xl:pr-14">
                {{ $slot }}
            </div>
            <x-converge::table-of-contents />
        </div>
    </div>
</x-converge::layout>
