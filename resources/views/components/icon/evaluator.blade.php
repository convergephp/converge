@use('Fluxtor\Converge\Enums\IconSize')
@props([
    'icon' => null,
    'iconSize' => null,
])
@php
    $iconClasses =
        $icon instanceof \Illuminate\View\ComponentSlot
            ? new \Illuminate\View\ComponentAttributeBag($icon->attributes->getAttributes())
            : new \Illuminate\View\ComponentAttributeBag();

@endphp

<span
    {{ $iconClasses->class('px-0.5 flex items-center mx-0.5')->class(
        match ($iconSize) {
            IconSize::Small, 'sm' => 'h-4 w-4',
            IconSize::Medium, 'md' => 'h-5 w-5',
            IconSize::Large, 'lg' => 'h-6 w-6',
            default => $iconSize,
        },
    ) }}>
    {!! $icon !!}
</span>
