@props([
    'item' => null,
    'itemStyle' => null,
])
@php
    $hasParentGroup = $item->getDepth() > 0;
    $baseClasses = Fluxtor\Converge\converge()->getTheme()->getSidebarItemStyle()['baseClasses'];
    $activeClasses = Fluxtor\Converge\converge()->getTheme()->getSidebarItemStyle()['activeClasses'];
    $nestedClasses = Fluxtor\Converge\converge()->getTheme()->getSidebarItemStyle()['nestedClasses'];
    // dd($baseClasses, $activeClasses, $nestedClasses);
@endphp

<li class="flex text-base-content scroll-m-4 first:scroll-m-20">
    {{ \Fluxtor\Converge\intercept(\Fluxtor\Converge\Enums\Interceptor::BEFORE_SIDEBAR_LINK, fn() => $item) }}
    <a href="{{ $item->getUrl() }}" @class([
        $baseClasses,
        $nestedClasses => $hasParentGroup,
        $activeClasses => $item->isActive(),
    ])>
        {{ \Fluxtor\Converge\intercept(\Fluxtor\Converge\Enums\Interceptor::BEFORE_SIDEBAR_LABEL, fn() => $item) }}
        <div class="flex justify-between w-full text-sm ">
            {{ $item->getLabel() }}
        </div>
        {{ \Fluxtor\Converge\intercept(\Fluxtor\Converge\Enums\Interceptor::AFTER_SIDEBAR_LABEL, fn() => $item) }}
    </a>
    {{ \Fluxtor\Converge\intercept(\Fluxtor\Converge\Enums\Interceptor::AFTER_SIDEBAR_LINK, fn() => $item) }}
</li>
