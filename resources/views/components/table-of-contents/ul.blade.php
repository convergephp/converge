{{-- @props(['headings' => []])

<ul class="!text-base-content [&_*]:!text-base-content [&_*]:hover:!text-primary space-y-1">
    @php
        if (empty($headings)) return;
        
        $minLevel = $headings->min(fn($h) => $h->getLevel()); // Find the smallest heading level
        dd($minLevel);
        $indentStep = 4; // Fixed margin step (adjust as needed)
    @endphp

    @foreach ($headings as $heading)
        @php
            $normalizedLevel = $heading->getLevel() - $minLevel; // Normalize levels
            $marginLeft = $normalizedLevel * $indentStep; // Apply fixed indentation
        @endphp

        <li class="ml-{{ $marginLeft }}">
            <a class="block" href="#content-{{ $heading->getSlug() }}">
                {{ $heading->getLabel() }}
            </a>
        </li>
    @endforeach
</ul> --}}
@props(['headings' => [], 'level' => 1])

<ul>
    @foreach ($headings as $heading)
        @if ($heading->getLevel() === $level)
            <li>
                <a href="#content-{{ $heading->getSlug() }}">
                    {{ $heading->getLabel() }}
                </a>

                @php
                    $nextLevelHeadings = $headings->filter(fn($item) => $item->getLevel() === $level + 1);
                @endphp

                @if ($nextLevelHeadings->isNotEmpty())
                    <x-converge::table-of-contents.ul    :headings="$nextLevelHeadings" :level="$level + 1" />
                @endif
            </li>
        @endif
    @endforeach
</ul>
