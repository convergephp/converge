@props([
    'headings' => [],
])
@php
    $layout = \Fluxtor\Converge\converge()->getTheme()->getLayout()->value;
@endphp

<x-converge-layout :name="$layout">
    <div data-doc>
        {{ $slot }}
    </div>
</x-converge-layout>
