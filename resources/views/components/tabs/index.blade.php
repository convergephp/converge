<div x-data="tabs" x-id="['tab']" {{ $attributes->merge(['class' => 'blade mx-auto dark:text-white']) }}>
    <ul x-ref="tablist" x-on:keydown.right.prevent.stop="$focus.wrap().next()"
        x-on:keydown.home.prevent.stop="$focus.first()" x-on:keydown.page-up.prevent.stop="$focus.first()"
        x-on:keydown.left.prevent.stop="$focus.wrap().prev()" x-on:keydown.end.prevent.stop="$focus.last()"
        x-on:keydown.page-down.prevent.stop="$focus.last()" role="tablist"
        {{ $items->attributes->merge(['class' => 'flex border border-b border-gray-200 dark:bg-transparent bg-white rounded-xl dark:border-white/10 overflow-hidden items-center overflow-x-auto scroll-smooth scrollbar-hidden']) }}>
        {{ $items }}
    </ul>

    <div role="tabpanels" class="p-3 text-gray-800 bg-white dark:text-gray-400 dark:bg-transparent"
        {{ $panels->attributes }}>
        {{ $panels }}
    </div>
</div>

<style>
    .scrollbar-hidden::-webkit-scrollbar {
        display: none;
        /* Safari and Chrome */
    }

    .scrollbar-hidden {
        -ms-overflow-style: none;
        /* IE and Edge */
        scrollbar-width: none;
        /* Firefox */
    }
</style>
