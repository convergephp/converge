@props(['position' => 'bottom-start'])

<div {{ $attributes->merge(['class' => 'flex justify-center']) }}>
    <div x-data="dropdown"
         x-on:keydown.escape.prevent.stop="close($refs.button)"
         x-on:focusin.window="handleFocusInOut($event)"
         x-id="['dropdown-button']"
         class="relative">
        <button x-ref="button"
                x-on:keydown.tab.prevent.stop="$focus.focus($focus.within($refs.panel).getFirst())"
                x-on:keydown.down.prevent.stop="$focus.focus($focus.within($refs.panel).getFirst())"
                x-on:keydown.space.stop.prevent="toggle()"
                x-on:keydown.enter.stop.prevent="toggle()"
                x-on:keyup.space.stop.prevent
                x-on:click="toggle()"
                x-bind:aria-expanded="open"
                x-bind:aria-controls="$id('dropdown-button')"
                type="button"
                {{ $button->attributes->merge(['class' => 'flex min-h-min items-center px-2 py-1 ']) }}>
            {{ $button }}
        </button>
        <!-- Panel -->
        <div x-show="open"
             x-ref="panel"
             x-anchor.{{ $position }}.offset.10="$refs.button"
             x-on:keydown.down.prevent.stop="$focus.next()"
             x-on:keydown.up.prevent.stop="$focus.prev()"
             x-on:keydown.home.prevent.stop="$focus.first()"
             x-on:keydown.page-up.prevent.stop="$focus.first()"
             x-on:keydown.end.prevent.stop="$focus.last()"
             x-on:keydown.page-down.prevent.stop="$focus.last()"
             x-transition:enter="transition ease-out duration-200"
             x-transition:enter-start="opacity-0 scale-95"
             x-transition:enter-end="opacity-100 scale-100"
             x-transition:leave="transition ease-in duration-75"
             x-transition:leave-start="opacity-100 scale-100"
             x-transition:leave-end="opacity-0 scale-95"
             x-on:click.away="close($refs.button)"
             x-bind:id="$id('dropdown-button')"
             style="display: none;"
             {{ $items->attributes->merge(['class' => 'rounded-box bg-base-200 flex flex-col gap-y-1 font-base px-1 py-2 border border-base-300']) }}>
            {{ $items }}
        </div>

    </div>
</div>
