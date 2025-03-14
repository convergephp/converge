@props([
    'title' => 'I am an Accordion.',
    'open' => false,
    'id' => 'accordion-' . uniqid(),
])

<div {{ $attributes->merge(['class' => 'rounded-box overflow-hidden bg-base-200 border border-gray-400/20 mb-4']) }}>
    <div x-data="{ open: {{ $open ? 'true' : 'false' }} }"
         id="{{ $id }}">
        {{-- Accordion Header  --}}
        <button type="button"
                class="hover:bg-primary/6 flex w-full items-center justify-between p-4 text-left text-gray-300 focus:outline-none"
                :class="{
                    'bg-primary/6': open
                }"
                x-on:click="open = !open"
                :aria-expanded="open"
                aria-controls="{{ $id }}-content">
            <span class="text-sm font-bold">{{ $title }}</span>
            <svg class="h-4 w-4 transition-transform duration-300"
                 :class="{ 'rotate-180': open, 'rotate-0': !open }"
                 fill="none"
                 stroke="currentColor"
                 viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"></path>
            </svg>
        </button>

        {{-- Accordion Content --}}
        <div id="{{ $id }}-content"
             x-show="open"
             class="text-base-content border-none px-4 py-2 text-base">
            {{ $slot }}
        </div>
    </div>
</div>
