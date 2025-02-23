@props([
    'icon' => null,
    'iconPosition' => null,
    'label' => null,
])

@php
    use Fluxtor\Converge\Enums\IconPosition;
    // dd($icon);
    $isIconBefore = filled($icon) && $iconPosition === IconPosition::Before->value;
    $isIconAfter = filled($icon) && $iconPosition === IconPosition::After->value;
@endphp

<div class="mx-1 flex w-full items-center">
    @if ($isIconBefore)
        <span
            {{ $icon instanceof \Illuminate\View\ComponentSlot
                ? (new \Illuminate\View\ComponentAttributeBag($icon->attributes->getAttributes()))
                    ->merge(['class' => 'px-0.5'])
                : new \Illuminate\View\ComponentAttributeBag(['class' => 'px-0.5']) }}
            >
            {!! $icon !!}
        </span>
    @endif

    <span>{{ $label }}</span>

    @if ($isIconAfter)
        <span class="px-0.5" @if ($icon instanceof \Illuminate\View\ComponentSlot) {{ $icon->attributes }} @endif>
            {!! $icon !!}
        </span>
    @endif
</div>
