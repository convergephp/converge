@props([
    'closeOnClick' => true,
    'href' => null,
])
<div role="menuitem"
     tabindex="-1"
     {{ $attributes->merge([
         'class' => 'btn btn-ghost hover:bg-primary/10 btn-sm',
     ]) }}
     x-data="{
         show: false,
         init() {
             $el.addEventListener('click', () => this.isClosedAfterClick())
         },
         isClosedAfterClick() {
             if (@js($closeOnClick)) {
                 close();
             }
         }
     }"
     x-ref="item"
     x-on:mouseenter="show = true"
     x-on:mouseleave="show = false"
     x-on:keydown.enter.prevent="$el.click()">
    @if (filled($href))
        <a href="{{ $href }}"
           class="w-full">
            {{ $slot }}
        </a>
    @else
        {{ $slot }}
    @endif
</div>
