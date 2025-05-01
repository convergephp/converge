<x-converge::page :$metadata>
    <div x-data="showContentsTweacks">
        <div x-data="codeBlockClipboard"
             class="prose-pre:!rounded-box prose-pre:leading-6 prose-img:!rounded-box prose-video:!rounded-box prose-blockquote:!bg-primary/6 prose-blockquote:!rounded-r-field prose-blockquote:!border-primary prose-tr:!border-gray-400/20 prose-thead:!bg-base-100 prose-thead:!px-2 prose-thead:!border-gray-400/20 prose-th:!px-1 prose-th:!text-base-content prose-td:!text-base-content/60 prose-th:!py-3 prose-table:border prose-table:border-gray-400/20 prose-table:!rounded-field prose-td:!px-1 prose-td:!py-3 prose-tr:hover:bg-gray-400/6 prose-tr:hover:cursor-pointer prose-td:!border-gray-400/20 prose-hr:border-gray-400/20 prose-pre:shadow-sm prose-pre:!m-0 prose-pre:border prose-pre:border-gray-400/20 prose-pre:border prose-pre:py-6 prose content [&_*]:text-base-content [&_a]:!text-primary prose-blockquote:not-italic prose-table:block prose-table:max-w-full prose-table:overflow-x-auto prose-table:whitespace-nowrap prose-thead:sticky prose-thead:top-0 prose-table:scrollbar-thin prose-table:scrollbar-thumb-gray-400/40 prose-table:scrollbar-track-transparent z-10 mx-auto min-w-[320px] space-y-2 text-wrap text-sm leading-8 md:min-w-[576px] lg:w-[630px] lg:text-base 2xl:w-[750px] 2xl:max-w-screen-md [&_a]:mr-1 [&_a]:py-1 [&_a]:text-sm [&_a]:no-underline lg:[&_a]:text-base [&_p]:before:hidden [&_p]:after:hidden">
            {!! $contents !!}
        </div>
    </div>

    {{-- pagination --}}
    <div class="border-base-300 mt-12 flex border-t py-6">
        @if (filled($prev))
            <div class="px-2">
                <dt class="text-base-content/80 font-base text-sm">
                    Previous
                </dt>
                <dd class="mt-1">
                    <a href="{{ $prev->url }}"
                       class="hover:text-primary text-base-content text-base font-semibold">
                        <span aria-hidden="true">&larr;</span> {{ $prev->label }}
                    </a>
                </dd>
            </div>
        @endif

        @if (filled($next))
            <div class="ml-auto text-right">
                <dt class="font-display text-base-content/80 font-base text-sm">
                    Next
                </dt>
                <dd class="mt-1">
                    <a href="{{ $next->url }}"
                       class="hover:text-primary text-base-content text-base font-semibold">
                        {{ $next->label }} <span aria-hidden="true">&rarr;</span>
                    </a>
                </dd>
            </div>
        @endif
    </div>
</x-converge::page>
