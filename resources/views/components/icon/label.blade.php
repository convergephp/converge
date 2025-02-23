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
        <x-converge::icon.evaluator :$icon />
    @endif

    <span>{{ $label }}</span>

    @if ($isIconAfter)
        <x-converge::icon.evaluator :$icon />
    @endif
</div>
