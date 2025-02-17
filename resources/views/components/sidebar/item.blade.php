@props([
    'url' => null,
    'label' => null,
    'depth' => 0,
    'active' => false,
])

<li class="text-base-content scroll-m-4 first:scroll-m-20">
    <a href="{{ '/' . ltrim($url, '/') }}" @class([
        'group/mini-link  group mt-2 w-full flex transition-colors duration-800 cursor-pointer items-center  space-x-3 py-2 px-2  text-base-content  hover:bg-primary/10 rounded-field rounded-field                                                                                       duration-200 ',
        'lg:ml-2' => $depth >= 1,
        'bg-primary/10' => $active,
    ])>
        <div class="flex items-center justify-between w-full text-sm transition duration-300">
            {{ $label }}
            @if ($active)
                <x-converge::icon icon="point" class="size-3 fill-[#24f200] shadow-lg" />
            @endif
        </div>
    </a>
</li>
