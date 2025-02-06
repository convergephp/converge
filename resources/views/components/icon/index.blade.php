@props([
    'class' => '',
    'icon' => null,
])

@svg($icon, $class, array_filter($attributes->getAttributes()))

{{ svg($icon) }}