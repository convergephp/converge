@props(['groupItem', 'canCollapsedGroupes' => true])

@php
    $label = $groupItem->getLabel();
    $items = $groupItem->getItems();
    $depth = $groupItem->getDepth();

    $hasActiveChild = $items->contains(function ($item) {
        return $item->isActive();
    });

    $isOpen = $hasActiveChild || false;
@endphp
<li
    @if ($canCollapsedGroupes) x-data="{
            isOpen: {{ Illuminate\Support\Js::from($isOpen) }},
            toggleGroup() {
                this.isOpen = !this.isOpen;
            }
        }" @endif>
    <button @click="toggleGroup()" type="button"
        class="flex items-center w-full p-2 mt-2 text-base font-semibold transition duration-75 text-base-content"
        :aria-expanded="isOpen">
        {{ \Fluxtor\Converge\intercept(\Fluxtor\Converge\Enums\Interceptor::BEFORE_SIDEBAR_GROUP_LABEL, fn() => $groupItem) }}
        <span class="flex-1 text-left whitespace-nowrap">
            {{ $label }}
        </span>
        {{ \Fluxtor\Converge\intercept(\Fluxtor\Converge\Enums\Interceptor::AFTER_SIDEBAR_GROUP_LABEL, fn() => $groupItem) }}
        @if ($canCollapsedGroupes)
            <svg x-bind:class="{ 'rotate-1': isOpen }"
                class="font-semibold transition-transform duration-200 ease-in-out size-4 fill-none stroke-base-content"
                viewBox="0 0 24 24" stroke="currentColor">
                <path x-show="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                <path x-show="isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M19 9l-7 7-7-7" />
            </svg>
        @endif
    </button>

    {{-- <ul x-show="isOpen" x-collapse.duration.400ms x-transition:enter="transition transform ease-out duration-400"
        x-transition:enter-start="transform scale-y-0 opacity-0"
        x-transition:enter-end="transform scale-y-100 opacity-100"
        x-transition:leave="transition transform ease-in duration-200"
        x-transition:leave-start="transform scale-y-100 opacity-100"
        x-transition:leave-end="transform scale-y-0 opacity-0" class="p-0 ml-2 space-y-1 border-l"
        style="display: none; border-color: rgba(128, 128, 128, 0.2)"> --}}

    <ul x-show="isOpen" x-collapse.duration.400ms x-transition:enter="transition-all ease-in-out duration-300"
        x-transition:enter-start="opacity-0 max-h-0 overflow-hidden" x-transition:enter-end="opacity-100 max-h-[1000px]"
        x-transition:leave="transition-all ease-in-out duration-300"
        x-transition:leave-start="opacity-100 max-h-[1000px]" x-transition:leave-end="opacity-0 max-h-0 overflow-hidden"
        class="p-0 ml-2 space-y-1 border-l" style="border-color: rgba(128, 128, 128, 0.2)">
        {{ \Fluxtor\Converge\intercept(\Fluxtor\Converge\Enums\Interceptor::BEFORE_SIDEBAR_GROUP_ITEMS, fn() => $groupItem) }}
        @foreach ($items as $item)
            <x-converge::sidebar.item :$item />
        @endforeach
        {{ \Fluxtor\Converge\intercept(\Fluxtor\Converge\Enums\Interceptor::AFTER_SIDEBAR_GROUP_ITEMS, fn() => $groupItem) }}
    </ul>
</li>
