@props([
    'item' => null,
    'itemStyle' => null,
])
@php
    $style = Fluxtor\Converge\converge()->getTheme()->getSidebarItemStyle();
@endphp

<li class="flex text-base-content scroll-m-4 first:scroll-m-20">
    {{ \Fluxtor\Converge\intercept(\Fluxtor\Converge\Enums\Interceptor::BEFORE_SIDEBAR_LINK, fn() => $item) }}
    <a href="{{ $item->getUrl() }}" @class([
        $style['baseClasses'],
        $style['nestedClasses'] => $item->getDepth() > 0,
        $style['activeClasses'] => $item->isActive(),
    ])>
        {{ \Fluxtor\Converge\intercept(\Fluxtor\Converge\Enums\Interceptor::BEFORE_SIDEBAR_LABEL, fn() => $item) }}
        <div class="flex justify-between w-full text-sm ">
            {{ $item->getLabel() }}
        </div>
        {{ \Fluxtor\Converge\intercept(\Fluxtor\Converge\Enums\Interceptor::AFTER_SIDEBAR_LABEL, fn() => $item) }}
    </a>
    {{ \Fluxtor\Converge\intercept(\Fluxtor\Converge\Enums\Interceptor::AFTER_SIDEBAR_LINK, fn() => $item) }}
</li>
