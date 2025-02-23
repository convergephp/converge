@props(['groupItem', 'canCollapsedGroupes' => true])

<?php
use function Fluxtor\Converge\converge;
$items = $groupItem->getItems();

$hasActiveChild = converge()->hasActiveChild($items);
$isOpen = $hasActiveChild || false;
?>

<li
    @if ($canCollapsedGroupes) x-data="{
            isOpen: {{ Illuminate\Support\Js::from($isOpen) }},
            toggle() {
                this.isOpen = !this.isOpen;
            }
        }" @endif>
    <button class="flex items-center w-full p-2 text-base font-semibold transition duration-75 text-base-content"
        type="button" x-on:click="toggle()" x-bind:aria-expanded="isOpen">
        {{ \Fluxtor\Converge\intercept(\Fluxtor\Converge\Enums\Interceptor::BEFORE_SIDEBAR_GROUP_LABEL, fn() => $groupItem) }}
        <span class="flex-1 text-left whitespace-nowrap">
            {{ $groupItem->getLabel() }}
        </span>
        {{ \Fluxtor\Converge\intercept(\Fluxtor\Converge\Enums\Interceptor::AFTER_SIDEBAR_GROUP_LABEL, fn() => $groupItem) }}
        @if ($canCollapsedGroupes)
            <svg class="font-semibold transition-transform duration-200 ease-in-out stroke-base-content size-4 fill-none"
                x-bind:class="{ 'rotate-1': isOpen }" viewBox="0 0 24 24" stroke="currentColor">
                <path x-show="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                <path x-show="isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M19 9l-7 7-7-7" />
            </svg>
        @endif
    </button>
    <ul x-show="isOpen" class="p-0 ml-2 space-y-1 border-l" style="border-color: rgba(128, 128, 128, 0.2)"
        @endphpx-collapse.duration.400ms x-transition:enter="transition-all ease-in-out duration-300"
        x-transition:enter-start="opacity-0 max-h-0 overflow-hidden" x-transition:enter-end="opacity-100 max-h-[1000px]"
        x-transition:leave="transition-all ease-in-out duration-300"
        x-transition:leave-start="opacity-100 max-h-[1000px]"
        x-transition:leave-end="opacity-0 max-h-0 overflow-hidden">
        {{ \Fluxtor\Converge\intercept(\Fluxtor\Converge\Enums\Interceptor::BEFORE_SIDEBAR_GROUP_ITEMS, fn() => $groupItem) }}

        <x-converge::sidebar.items :sidebarItems="$items" />

        {{ \Fluxtor\Converge\intercept(\Fluxtor\Converge\Enums\Interceptor::AFTER_SIDEBAR_GROUP_ITEMS, fn() => $groupItem) }}
    </ul>
</li>
