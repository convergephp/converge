@props(['activeItem' => 0])

<div {{ $attributes->merge(['class' => 'border border-gray-400/20 rounded-box overflow-hidden divide-y-1 divide-gray-400/10']) }}
     x-data="{ activeAccordion: {{ $activeItem }} }">
    {{ $slot }}
</div>
