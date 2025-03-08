@props(['actions'])
<li
    {{ $attributes }}
    class="fi-global-search-result my-1 mr-1 flex scroll-mt-9 items-center justify-between rounded-lg bg-gray-50 px-3  transition-colors duration-300 focus:bg-gray-100 dark:focus:bg-white/10 focus:border focus-visible:outline-none focus:border-gray-400 dark:focus:border-white/30  hover:bg-gray-100/90 dark:bg-white/5 dark:focus-within:bg-white/5 dark:hover:bg-white/10"
    tabindex="0"    
>
    <a 
        class="fi-global-search-result-link  outline-none h-full py-6  w-full"
        wire:navigate
        tabindex="-1"    
        x-bind:href="result.url"
        x-on:click.stop="addToSearchHistory(result.title,result.url);close();"
        x-on:keydown.enter.stop="close()"
        >
        <h4  @class([
            'text-sm text-start font-semibold text-gray-950 dark:text-gray-300',
        ])>
            {{ $slot }}
        </h4>
    </a>
    
    @if (filled($actions))
        <span     
            tabindex="0"    
            class="actions-wrapper flex items-center focus:bg-gray-100 dark:focus:bg-white/10 focus:border focus-visible:outline-none focus:border-gray-400 dark:focus:border-white/30 ">
            {{ $actions }}
        </span>
    @endif
</li>
