@php
    $layout = $convergeTheme->getLayout();
    $layout = app('converge')->getTheme()->getLayout()->value;
@endphp

<x-converge-layout :layout="$layout">
    <div data-doc>
        {{ $slot }}
    </div>
</x-converge-layout>
