@props([
    'headings' => [],
    'depth' => 0,
])

<ul @class([
    'ml-4' => $depth > 0,
])>
    @foreach ($headings as $heading)
        <li class="hover:text-primary px-2 py-1 leading-5 transition-colors duration-300"
            x-bind:class="{ 'text-primary/80 ': '#' + $data.activeHeading === '{{ $heading->getSlug() }}' }">
            <a href="{{ $heading->getSlug() }}"
               class="text-base-content hover:text-primary text-sm">
                {{ $heading->getLabel() }}
            </a>
        </li>

        @if ($heading->getChildrens()->isNotEmpty())
            <x-converge::table-of-contents.ul :headings="$heading->getChildrens()"
                                              :depth="$depth + 1" />
        @endif
    @endforeach
</ul>
