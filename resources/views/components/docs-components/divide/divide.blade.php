@props(['title' => null, 'color' => 'primary'])

@php
    $color = isset($title)
        ? [
                'primary' => 'from-base-100 via-primary/10 to-primary/80',
                'success' => 'from-base-100 via-success/10 to-success/80',
                'warning' => 'from-base-100 via-warning/10 to-warning/80',
                'info' => 'from-base-100 via-info/10 to-info/80',
                'error' => 'from-base-100 via-error/10 to-error/80',
                'secondary' => 'from-base-100 via-secondary/10 to-secondary/80',
            ][$color] ?? 'from-base-100 via-primary/10 to-primary/80'
        : [
                'primary' => 'from-base-100 via-primary/40 to-base-300',
                'success' => 'from-base-100 via-success/40 to-base-100',
                'warning' => 'from-base-100 via-warning/40 to-base-100',
                'info' => 'from-base-100 via-info/40 to-base-100',
                'error' => 'from-base-100 via-error/40 to-base-100',
                'secondary' => 'from-base-100 via-secondary/40 to-base-100',
            ][$color] ?? 'from-base-100 via-primary/40 to-base-100';
@endphp

<div>
    @if ($title)
        <div class="mx-auto my-8 flex w-full max-w-3xl items-center">

            <div {{ $attributes->merge(['class' => "h-[1px] flex-grow bg-gradient-to-r {$color}"]) }}></div>

            <span class="text-base-content mx-4 whitespace-nowrap text-sm font-semibold">{{ $title }}</span>

            <div {{ $attributes->merge(['class' => "h-[1px] flex-grow bg-gradient-to-l {$color}"]) }}></div>
        </div>
    @else
        <div {{ $attributes->merge(['class' => "mx-auto h-[1px] my-8 max-w-3xl bg-gradient-to-r {$color}"]) }}>
        </div>
    @endif
</div>
