@props([
    'icon' => null,
    'iconPosition' => null,
    'iconSize' => null,
    'label' => null,
    'styles' => null,
])

@php
    use Converge\Enums\IconPosition;
    $isIconBefore = filled($icon) && $iconPosition === IconPosition::Before->value;
    $isIconAfter = filled($icon) && $iconPosition === IconPosition::After->value;
    $iconLabelClasses = 'mx-1 !flex w-full items-center';
    $styles =
        $styles instanceof \Converge\Support\Styles
            ? $styles->merge(['class' => $iconLabelClasses])
            : (new \Converge\Support\Styles())->merge(['class' => $iconLabelClasses]);
@endphp

<div {!! $styles !!}>

    @if ($isIconBefore)
        <x-converge::icon.evaluator :$icon :$iconSize />
    @endif

    <span {{ $attributes->merge(['class' => 'leading-5']) }}>{{ $label }}</span>

    @if ($isIconAfter)
        <x-converge::icon.evaluator :$icon :$iconSize />
    @endif
</div>
