@props([
    'icon' => null,
    'iconPosition' => null,
    'iconSize' => null,
    'label' => null,
    'styles' => null,
])

@php
    use Fluxtor\Converge\Enums\IconPosition;
    $isIconBefore = filled($icon) && $iconPosition === IconPosition::Before->value;
    $isIconAfter = filled($icon) && $iconPosition === IconPosition::After->value;
    $iconLabelClasses = 'mx-1 !flex w-full items-center';
    $styles =
        $styles instanceof \Fluxtor\Converge\Support\Styles
            ? $styles->merge(['class' => $iconLabelClasses])
            : (new \Fluxtor\Converge\Support\Styles())->merge(['class' => $iconLabelClasses]);
    // dd($styles);
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
