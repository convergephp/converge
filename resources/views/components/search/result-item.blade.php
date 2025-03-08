@props([
    'title',
    'rawTitle',
    'url',
])

<li 
    role="option"
    {{-- x-on:click="addToSearchHistory(@js($rawTitle),@js($url))" --}}
>
    <a 
        x-bind:href="result.url"
        wire:navigate
        @class([
            'block  scroll-mt-9 mx-1 my-1 dark:bg-white/5 group bg-gray-50 py-6 px-3 duration-300 transition-colors rounded-lg focus:bg-gray-100 dark:focus:bg-white/10 focus:border focus-visible:outline-none focus:border-gray-400 dark:focus:border-white/30  hover:bg-gray-100 dark:hover:bg-white/10 flex justify-between items-center',
            'p-3',
        ])
        >
        <h4
            x-html="result.title" 
            @class([
                'text-md text-start font-medium text-gray-950 dark:text-white',
            ])
        >
        </h4>
    </a>
</li>
