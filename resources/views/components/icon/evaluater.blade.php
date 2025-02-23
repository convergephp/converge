@props([
    'icon' => null,
])

<span
    {{ $icon instanceof \Illuminate\View\ComponentSlot
        ? (new \Illuminate\View\ComponentAttributeBag($icon->attributes->getAttributes()))->merge(['class' => 'px-0.5'])
        : new \Illuminate\View\ComponentAttributeBag(['class' => 'px-0.5']) }}>
    {!! $icon !!}
</span>
