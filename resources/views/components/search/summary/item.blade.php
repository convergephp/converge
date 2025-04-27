@props(['actions'])
<li {{ $attributes }}
    class="fi-global-search-result bg-base-300/50 focus:bg-base-100/60 focus:border-base-300 hover:bg-base-300 border-base-300 hover:border-primary/20 dark:focus-within:bg-base-100/5 my-1 mr-1 flex scroll-mt-9 items-center justify-between rounded-lg border px-3 transition-colors duration-300 focus:border focus-visible:outline-none"
    tabindex="0">
    <a class="fi-global-search-result-link h-full w-full py-6 outline-none"
       tabindex="-1"
       x-bind:href="result.url"
       x-on:click.stop="addToSearchHistory(result.title,result.url);close();"
       x-on:keydown.enter.stop="close()">
        <h4 @class(['text-sm text-start font-semibold  text-base-content'])>
            {{ $slot }}
        </h4>
    </a>

    @if (filled($actions))
        <span tabindex="0"
              class="actions-wrapper focus:bg-base-100/60 flex items-center border border-transparent focus:border-gray-400 focus-visible:outline-none">
            {{ $actions }}
        </span>
    @endif
</li>
