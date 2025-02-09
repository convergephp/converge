@props([
    'class' => '',
    'icon' => null,
])

@php
    $path = 'icons' . '.' . $icon;
@endphp

<x-dynamic-component :component="$path" :class="$class" />
