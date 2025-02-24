<svg
     x-data="{
        state: true
    }"
    x-modelable="state"
    {{ $attributes }}
    class="stroke-base-content size-4 fill-none font-semibold transition-transform duration-200 ease-in-out"
    viewBox="0 0 24 24" stroke="currentColor">
    <path x-show="!state" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="m4.5 15.75 7.5-7.5 7.5 7.5" />
    <path x-show="state" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
</svg>
