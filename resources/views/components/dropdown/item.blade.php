@props([
    'closeOnClick' => true,
    'href'=>null
])
<div role="menuitem" tabindex="-1"
    {{ $attributes->merge([
        'class' => 'dropdown-item cursor-pointer hover:rounded px-2 py-0.5 dark:focus-within:bg-white/5 dark:hover:bg-white/5 hover:bg-gray-100  dark:focus:bg-white/5 focus-within:bg-white hover:bg-white focus:bg-white',
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
        <a href="{{ $href }}" class="w-full">
            {{ $slot }}
        </a>
    @else
        {{ $slot }}
    @endif
</div>
    