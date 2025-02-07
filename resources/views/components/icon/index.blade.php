@props([
    'class' => '',
    'icon' => null,
])

@svg($icon, $class, array_filter($attributes->getAttributes()))

{{ svg('heroicon-c-magnifying-glass') }}

{{ svg($icon) }} 