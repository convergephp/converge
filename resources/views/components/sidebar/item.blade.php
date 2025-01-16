@props([
    'url' => null,
    'label' => null,
    'depth' => 0
])
<li class="scroll-m-4 text-white first:scroll-m-20">
    <a href="{{ app('converge')->getId() }}/{{ $url }}" @class([
        'group/mini-link  focus:outline-primary dark:focus:outline-primary-light group mt-2 flex cursor-pointer items-center space-x-3  py-1.5 pr-3 text-gray-700  hover:text-gray-900  dark:text-gray-400 dark:hover:text-gray-300 before:rotate-45 before:scale-0 before:rounded-sm before:bg-primary before:opacity-0 before:transition before:duration-200  hover:before:scale-100 hover:before:opacity-100 dark:before:bg-primary ',
        'lg:ml-2 lg:mt-0'=> $depth >= 1
    ])>
        <div class="transition duration-300 ease-out group-hover/mini-link:translate-x-1">
            {{ $label }}
        </div>
    </a>
</li>
