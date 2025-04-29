@props([
    'item' => null,
    'itemStyle' => null,
])
@php
    $style = Converge\converge()->getTheme()->getSidebarItemStyle();
@endphp

<li class="text-base-content flex scroll-m-4 first:scroll-m-20">
    {{ \Converge\intercept(\Converge\Enums\Interceptor::BEFORE_SIDEBAR_LINK, fn() => $item) }}
    <a href="{{ $item->getUrl() }}"
       @class([
           $style['baseClasses'],
           $style['nestedClasses'] => $item->getDepth() > 0,
           $style['activeClasses'] => $item->isActive(),
       ])>
        {{ \Converge\intercept(\Converge\Enums\Interceptor::BEFORE_SIDEBAR_LABEL, fn() => $item) }}
        <div class="flex w-full justify-between text-sm">
            {{ $item->getLabel() }}
        </div>
        {{ \Converge\intercept(\Converge\Enums\Interceptor::AFTER_SIDEBAR_LABEL, fn() => $item) }}
    </a>
    {{ \Converge\intercept(\Converge\Enums\Interceptor::AFTER_SIDEBAR_LINK, fn() => $item) }}
</li>
