@php
    $layout = app('converge')->getTheme()->getLayout()->value;
@endphp

<x-converge-layout :name="$layout" :$headings>
    <div data-doc>
        {{ $slot }}
    </div>
</x-converge-layout>
