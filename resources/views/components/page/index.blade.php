@props([
    'title',
])
@php
    $layout = \Fluxtor\Converge\converge()->getTheme()->getLayout()->value;
@endphp

<x-converge-layout :name="$layout" :title="$title">
    <div data-doc>
        {{ $slot }}
    </div>
</x-converge-layout>
