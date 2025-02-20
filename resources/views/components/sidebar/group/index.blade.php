@props([
    'groupItem', // Instance de SidebarGroup
    'active' => false,
    'canCollapsedGroupes' => true,
    'icon' => null,
    'subNavigation' => false,
])

@php
    $label = $groupItem->getLabel();
    $items = $groupItem->getItems();
    $depth = $groupItem->getDepth();
@endphp

<li
    @if ($canCollapsedGroupes) x-data="{
    isOpen: localStorage.getItem('sidebar_group_{{ Str::slug($label) }}') === 'true',
    toggleGroup() {
        this.isOpen = !this.isOpen;
        localStorage.setItem('sidebar_group_{{ Str::slug($label) }}', this.isOpen);
    }
}" @endif>
    <button @click="toggleGroup()" type="button"
        class="flex items-center w-full p-2 mt-2 text-base font-semibold transition duration-75 text-base-content"
        :aria-expanded="isOpen">
        <span class="flex-1 text-left ms-3 whitespace-nowrap">
            {{ $label }}
        </span>
        @if ($canCollapsedGroupes)
            <svg x-bind:class="{ 'rotate-90': isOpen }"
                class="font-semibold transition-transform duration-200 ease-in-out size-4" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path x-show="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                <path x-show="isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M19 9l-7 7-7-7" />
            </svg>
        @endif
    </button>

    <ul x-show="isOpen" x-collapse.duration.400ms x-transition:enter="transition transform ease-out duration-400"
        x-transition:enter-start="transform scale-y-0 opacity-0"
        x-transition:enter-end="transform scale-y-100 opacity-100"
        x-transition:leave="transition transform ease-in duration-200"
        x-transition:leave-start="transform scale-y-100 opacity-100"
        x-transition:leave-end="transform scale-y-0 opacity-0" class="p-0 ml-2 space-y-1 border-l"
        style="display: none; border-color: rgba(128, 128, 128, 0.2)">

        @foreach ($items as $item)
            <x-converge::sidebar.item :$item />
        @endforeach
    </ul>
</li>
