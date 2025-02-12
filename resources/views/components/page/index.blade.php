@php
    $layout = $convergeTheme->getLayout();
@endphp

<x-converge::layout>
    <div data-doc>
        {{ $slot }}
    </div>
</x-converge::layout>
