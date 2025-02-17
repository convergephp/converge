@props([
    'url' => null,
    'label' => null,
    'depth' => 0,
    'isActive' => false,
])

<li class="text-base-content scroll-m-4 first:scroll-m-20">
    {{ \Fluxtor\Converge\intercept(\Fluxtor\Converge\Enums\Interceptor::BEFORE_SIDEBAR_ITEM, $url) }}
    <a href="{{ '/' . ltrim($url, '/') }}" @class([
        'group/mini-link  group mt-2 flex transition-colors duration-800 cursor-pointer items-center  space-x-3 py-2 px-2  text-base-content  hover:bg-primary/10 rounded-field rounded-field                                                                                       duration-200 ',
        'lg:ml-2' => $depth >= 1,
        'bg-primary/10 text-primary-content' => $isActive,
    ])>
        <div class="flex justify-between w-full text-sm transition duration-300">
            {{ $label }}
            @if ($isActive)
                <span class="font-bold text-green-400 shadow-lg shadow-green-400">•</span>
            @endif
        </div>
    </a>
    {{ \Fluxtor\Converge\intercept(\Fluxtor\Converge\Enums\Interceptor::AFTER_SIDEBAR_ITEM) }}
</li>
