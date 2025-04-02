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
         class="prose-pre:rounded-xl prose-pre:shadow-sm prose content [&_*]:text-base-content [&_a]:!text-accent prose-blockquote:not-italic z-10 mx-auto min-w-[320px] text-wrap text-sm leading-8 md:min-w-[576px] lg:w-[630px] lg:text-base 2xl:w-[750px] 2xl:max-w-screen-md [&_a]:mr-1 [&_a]:py-1 [&_a]:text-sm [&_a]:no-underline lg:[&_a]:text-base [&_p]:before:hidden [&_p]:after:hidden">
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
    </div>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const contentDiv = document.querySelector('.prose.content');
            const headings = contentDiv.querySelectorAll('h1, h2, h3, h4, h5, h6');

            // Single SVG icon for all heading levels
            const headingIcon =
                `<div class="w-6 h-6 rounded-md flex items-center justify-center shadow-sm text-base-content brightness-[1.35] ring-1 hover:brightness-150 ring-base-300"><svg xmlns="http://www.w3.org/2000/svg" fill="gray" height="12px" viewBox="0 0 576 512"><path d="M0 256C0 167.6 71.6 96 160 96h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C98.1 144 48 194.1 48 256s50.1 112 112 112h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H160C71.6 416 0 344.4 0 256zm576 0c0 88.4-71.6 160-160 160H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c61.9 0 112-50.1 112-112s-50.1-112-112-112H344c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c88.4 0 160 71.6 160 160zM184 232H392c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z"></path></svg></div>`;

            headings.forEach(heading => {
                // Get the heading text content
                let content = heading.textContent;

                // Check if the content starts with # and remove it
                if (content.startsWith('#')) {
                    content = content.replace(/^#+\s*/, '');
                }

                // Generate a valid ID based on the content
                // Adding "content-" prefix, converting to lowercase and replacing spaces with hyphens
                const headingId = 'content-' + content.toLowerCase()
                    .replace(/\s+/g, '-')
                    .replace(/[^\w-]/g, '');

                // Add the ID to the heading
                heading.id = headingId;

                // Create the icon element with proper positioning
                const iconSpan = document.createElement('span');
                iconSpan.className =
                    'heading-icon flex items-center justify-center absolute hidden lg:inline-block  -left-8 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer';
                iconSpan.innerHTML = headingIcon;
                iconSpan.style.marginRight = '0.5rem';

                // Make the icon clickable with the same anchor functionality
                iconSpan.addEventListener('click', (e) => {
                    e.stopPropagation(); // Prevent event bubbling
                    window.location.hash = headingId;
                });

                // Create the content element with cleaned text
                const contentSpan = document.createElement('span');
                contentSpan.textContent = content;
                contentSpan.className = 'ml-0'; // Add a small left margin

                // Clear the heading content and maintain its original tag
                heading.innerHTML = '';

                // Set the heading to display flex for proper alignment
                heading.style.display = 'flex';
                heading.style.alignItems = 'center';
                heading.style.position = 'relative';

                // Add the elements in the correct order
                heading.appendChild(iconSpan);
                heading.appendChild(contentSpan);

                // Make the entire heading clickable
                heading.addEventListener('click', (e) => {
                    // Now we simply handle the click regardless of target
                    e.preventDefault();
                    window.location.hash = headingId;
                });

                // Add the hover effect
                heading.classList.add('group', 'cursor-pointer');
            });
        });
    </script>

</x-converge::page>
