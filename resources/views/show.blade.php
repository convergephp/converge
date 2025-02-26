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
        class="z-10 text-sm lg:text-base leading-8 prose  min-w-[320px] md:min-w-[576px] lg:w-[630px] mx-auto lg:max-w-screen-sm 2xl:max-w-screen-md dark:prose-invert content
        [&_*]:text-base-content [&_a]:!text-accent [&_a]:py-1
        [&_a]:text-base [&_a]:no-underline [&_a]:mr-1 text-wrap">
        {!! $contents !!}
    </div>

    {{-- pagination --}}
    <div class="flex flex-wrap items-center justify-between py-5 bg-transparent min-h-40">
        <a class="btn btn-base-100 btn-sm md:btn-wide btn-outline text-base-content"
            href="{{ env('APP_URL') . current($previousUrl)->getUrl() }}">
            <x-converge::icon icon="arrow-long-left" class="mr-1 size-5" />
            {{ current($previousUrl)->getLabel() }}
        </a>

        <a class="btn btn-base-100 btn-sm md:btn-wide btn-outline text-base-content"
            href="{{ env('APP_URL') . current($nextUrl)->getUrl() }}">
            {{ current($nextUrl)->getLabel() }}
            <x-converge::icon icon="arrow-long-right" class="ml-1 size-5" />

            <path stroke-linecap="round" stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
        </a>
    </div>
</x-converge::page>
