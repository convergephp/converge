@props([
    'position'=>'right-start'
])
<div 
    x-show="show"
    x-ref="subItems"
    x-anchor.{{ $position }}.offset.10 = "$refs.item"
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
    :id="$id('dropdown-subitems')"
    style="display: none;"
    {{ $attributes->merge([
        'class'=>"absolute left-0 py-1 px-1 max-w-96 rounded-lg bg-white/5 border borde-white/5 shadow-md"
    ]) }}
>
    {{ $slot }}
</div>