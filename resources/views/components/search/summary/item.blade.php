@props(['actions'])
<li {{ $attributes }}
    class="fi-global-search-result bg-primary focus:bg-base-100/60 focus:border-base-300 hover:bg-base-100/60 dark:focus-within:bg-base-100/5 my-1 mr-1 flex scroll-mt-9 items-center justify-between rounded-lg px-3 transition-colors duration-300 focus:border focus-visible:outline-none"
    tabindex="0">
    <a class="fi-global-search-result-link h-full w-full py-6 outline-none"
       wire:navigate
       tabindex="-1"
       x-bind:href="result.url"
       x-on:click.stop="addToSearchHistory(result.title,result.url);close();"
       x-on:keydown.enter.stop="close()">
        <h4 @class([
            'text-sm text-start font-semibold bg-base-100 text-base-content',
        ])>
            {{ $slot }}
        </h4>
    </a>

    @if (filled($actions))
        <span tabindex="0"
              class="actions-wrapper focus:border-base-300 focus:bg-base-100/60 flex items-center focus:border focus-visible:outline-none">
            {{ $actions }}
        </span>
    @endif
</li>
