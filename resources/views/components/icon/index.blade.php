@props([
    'class' => '',
    'variant' => 'outline',
    'icon' => null,
])

@php
    $path = 'icons' . '.' . $variant . '.' . $icon;
@endphp

<x-dynamic-component :component="$path" :class="$class" />
