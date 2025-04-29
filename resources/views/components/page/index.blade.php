@props([
    'metadata',
])
@php
    $layout = \Converge\converge()->getTheme()->getLayout()->value;
@endphp

<x-converge-layout :name="$layout" :$metadata>
    <div data-doc>
        {{ $slot }}
    </div>
</x-converge-layout>
