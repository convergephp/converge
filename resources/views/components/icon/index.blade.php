@props([
    'class' => '',
    'variant' => 'outline',
    'icon' => null,
])

{{-- @php
$path = match($variant){
    'outline' => 'outline',
    'solid' => 'solid',
    'mini' => 'outline',
    'micro' => 'outline',
}
@php --}}

<x-dynamic-component :component="$icon" :class="$class" />
