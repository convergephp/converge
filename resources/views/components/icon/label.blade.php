@props([
    'icon' => null,
    'position',
])

@php
    use Fluxtor\Converge\Enums\IconPosition;
    $icon = $item->getIcon();
    $iconPosition = $item->getIconPosition()->value;
    $isIconBefore = filled($icon) && $iconPosition === IconPosition::Before->value;
    $isIconAfter = filled($icon) && $iconPosition === IconPosition::After->value;
@endphp

<div class="mx-1 flex w-full items-center">
    @if ($isIconBefore)
        <span class="px-0.5">
            {!! $icon !!}
        </span>
    @endif

    <span>{{ $item->getLabel() }}</span>

    @if ($isIconAfter)
        <span class="px-0.5">
            {!! $icon !!}
        </span>
    @endif
</div>
