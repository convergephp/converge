@props([
    'url' => null,
    'label' => null,
    'depth' => 0,
])
<li class="text-base-content scroll-m-4 first:scroll-m-20">
    <a href="{{ '/' . ltrim($url, '/') }}" @class([
        'group/mini-link  group mt-2 flex cursor-pointer items-center space-x-3 py-2 px-2  text-base-content  hover:bg-primary/10 rounded-field rounded-field                                                                                       duration-200 ',
        'lg:ml-2 lg:mt-0' => $depth >= 1,
    ])>
        <div class="text-xs transition duration-300">
            {{ $label }}
        </div>
    </a>
</li>
