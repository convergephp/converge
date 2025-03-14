@props([
    'title' => 'Accordion Item',
    'index' => 0,
])

<div class="bg-base-200 overflow-hidden border-gray-400/20">
    <div x-data="{ id: 'accordion-' + $id('accordion') }">
        {{-- Accordion Header --}}
        <button type="button"
                class="hover:bg-primary/6 flex w-full items-center justify-between p-4 text-left text-gray-300 focus:outline-none"
                :class="{
                    'bg-primary/6': activeAccordion === {{ $index }},
                }"
                @click="activeAccordion === {{ $index }} ? activeAccordion = null : activeAccordion = {{ $index }}"
                :aria-expanded="activeAccordion === {{ $index }}"
                :aria-controls="id + '-content'">
            <span class="text-sm font-bold">{{ $title }}</span>
            <svg class="h-4 w-4 transition-transform duration-300"
                 :class="{
                     'rotate-180': activeAccordion === {{ $index }},
                     'rotate-0': !(activeAccordion ===
                         {{ $index }})
                 }"
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
        <div :id="id + '-content'"
             x-show="activeAccordion === {{ $index }}"
             class="text-base-content border-none px-4 py-2 text-base">
            {!! $slot !!}
        </div>
    </div>
</div>
