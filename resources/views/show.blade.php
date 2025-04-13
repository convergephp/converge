<x-converge::page>
    <div x-data="showContentsTweacks">
        <div x-data="codeBlockClipboard"
            class="prose-pre:rounded-xl prose-pre:shadow-sm prose content [&_*]:text-base-content [&_a]:!text-accent prose-blockquote:not-italic z-10 mx-auto min-w-[320px] text-wrap text-sm leading-8 md:min-w-[576px] lg:w-[630px] lg:text-base 2xl:w-[750px] 2xl:max-w-screen-md [&_a]:mr-1 [&_a]:py-1 [&_a]:text-sm [&_a]:no-underline lg:[&_a]:text-base [&_p]:before:hidden [&_p]:after:hidden">
            {!! $contents !!}
        </div>
    </div>

    {{-- pagination --}}
    <div class="border-base-300 mt-12 flex border-t pt-6">
        @if(filled($prev))
            <div>
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

        @if(filled($next))
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
