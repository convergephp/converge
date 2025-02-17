@props([
    'item' => null,
])
<li class="text-base-content flex scroll-m-4 first:scroll-m-20">
    <a href="{{ '/' . ltrim($item->getUrl(), '/') }}" @class([
        'group/mini-link  group mt-2 w-full flex transition-colors duration-800 cursor-pointer items-center  space-x-3 py-2 px-2  text-base-content  hover:bg-primary/10 rounded-field rounded-field                                                                                       duration-200 ',
        'lg:ml-2' => $item->getDepth() >= 1,
        'bg-primary/10 text-primary-content' => $item->isActive(),
    ])>
        {{ \Fluxtor\Converge\intercept(\Fluxtor\Converge\Enums\Interceptor::BEFORE_SIDEBAR_ITEM, $item) }}
        <div class="flex w-full justify-between text-sm transition duration-300">
            {{ $item->getLabel() }}
            @if ($item->isActive())
                <x-converge::icon icon="point" class="size-3 fill-[#24f200] shadow-lg" />
            @endif
        </div>
        {{ \Fluxtor\Converge\intercept(\Fluxtor\Converge\Enums\Interceptor::AFTER_SIDEBAR_ITEM) }}
    </a>
</li>
