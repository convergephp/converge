@props([
    'item' => null,
])

<li class="flex text-base-content scroll-m-4 first:scroll-m-20">
    {{ \Fluxtor\Converge\intercept(\Fluxtor\Converge\Enums\Interceptor::BEFORE_SIDEBAR_LINK, fn() => $item) }}
    <a href="{{ $item->getUrl() }}" @class([
        'group/mini-link  group mt-2 ml-1 w-full flex  cursor-pointer items-center  space-x-3 py-2 px-2  text-base-content  hover:bg-primary/10 rounded-field rounded-field                                                                                       duration-200 ',
        'bg-primary/10 ' => $item->isActive(),
    ])>
        {{ \Fluxtor\Converge\intercept(\Fluxtor\Converge\Enums\Interceptor::BEFORE_SIDEBAR_LABEL, fn() => $item) }}
        <div class="flex justify-between w-full text-sm ">
            {{ $item->getLabel() }}
        </div>
        {{ \Fluxtor\Converge\intercept(\Fluxtor\Converge\Enums\Interceptor::AFTER_SIDEBAR_LABEL, fn() => $item) }}
    </a>
    {{ \Fluxtor\Converge\intercept(\Fluxtor\Converge\Enums\Interceptor::AFTER_SIDEBAR_LINK, fn() => $item) }}
</li>
