@props(['headings' => []])

<ul @class([
    'ml-4'
])>
    @foreach ($headings as $heading)
        <li class="px-2 py-1 leading-5">
            <a href="#content-{{ $heading->getSlug() }}">
            {{ $heading->getLabel() }}
            </a>
        </li>
        @if ($heading->getChildrens()->isNotEmpty())
            <x-converge::table-of-contents.ul :headings="$heading->getChildrens()" />
        @endif
    @endforeach
</ul>
