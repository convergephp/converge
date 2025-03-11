@php
    use Fluxtor\Converge\Sidebar\SidebarGroup;
    use Fluxtor\Converge\Sidebar\SidebarItem;
    $sidebarItems = \Fluxtor\Converge\converge()->getSidebarItems();

    function extractArray($sidebarItems)
    {
        $items = [];
        foreach ($sidebarItems as $key => $item) {
            if ($item instanceof SidebarItem) {
                $items[$item->getUrl()] = $item;
            } elseif ($item instanceof SidebarGroup && count($item->getItems()) >= 1) {
                foreach ($item->getItems() as $subItem) {
                    if ($subItem instanceof SidebarItem) {
                        $items[$subItem->getUrl()] = $subItem;
                    }
                }
            }
        }
        return $items;
    }
    $paginationItems = extractArray($sidebarItems);
    $indexOfCurrentUrl = array_search(request()->getRequestUri(), array_keys($paginationItems));
    $previousUrl =
        $indexOfCurrentUrl == 0
            ? array_slice($paginationItems, count($paginationItems) - 1, 1)
            : array_slice($paginationItems, $indexOfCurrentUrl - 1, 1); // [sidebareitem]

    $nextUrl =
        $indexOfCurrentUrl == count($paginationItems) - 1
            ? array_slice($paginationItems, 0, 1)
            : array_slice($paginationItems, $indexOfCurrentUrl + 1, 1); // [sidebareitem]
@endphp

<x-converge::page>
    <div x-data="codeBlockClipboard"
         class="prose-pre:rounded-xl prose-pre:shadow-sm prose content [&_*]:text-base-content [&_a]:!text-accent prose-blockquote:not-italic z-10 mx-auto min-w-[320px] text-wrap text-sm leading-8 md:min-w-[576px] lg:w-[630px] lg:text-base 2xl:w-[750px] 2xl:max-w-screen-md [&_a]:mr-1 [&_a]:py-1 [&_a]:text-base [&_a]:no-underline [&_p]:before:hidden [&_p]:after:hidden">
        {!! $contents !!}
    </div>

    {{-- pagination --}}
    <div class="border-base-300 mt-12 flex border-t pt-6">
        <div>
            <dt class="text-base-content/80 font-base text-sm">
                Previous
            </dt>
            <dd class="mt-1">
                <a href="{{ env('APP_URL') . current($previousUrl)->getUrl() }}"
                   class="hover:text-primary text-base-content text-base font-semibold">
                    <span aria-hidden="true">&larr;</span> {{ current($previousUrl)->getLabel() }}
                </a>
            </dd>
        </div>

        <div class="ml-auto text-right">
            <dt class="font-display text-base-content/80 font-base text-sm">
                Next
            </dt>
            <dd class="mt-1">
                <a href="{{ env('APP_URL') . current($nextUrl)->getUrl() }}"
                   class="hover:text-primary text-base-content text-base font-semibold">
                    {{ current($nextUrl)->getLabel() }} <span aria-hidden="true">&rarr;</span>
                </a>
            </dd>
        </div>

        </>
    </div>
</x-converge::page>
