@props(['groupItem'])
<li>
    <x-converge::dropdown>
        <x-slot:button>
            <span class="text-sm">
                {{ $groupItem->getLabel() }}
            </span>
            <svg class="ml-2 overflow-visible" aria-hidden="true" width="6" height="3">
                <path d="M0 0L3 3L6 0" fill="none" stroke="currentColor" stroke-width="1.5"
                    stroke-linecap="round"></path>
            </svg>
        </x-slot:button>
        <x-slot:items class="w-36">
            @foreach($groupItem->getItems() as $item)
                <x-converge::dropdown.item class="flex items-center gap-1" x-on:click="setTheme('light')">
                    <span>{{ $item->getLabel() }}</span>
                </x-converge::dropdown.item>            
            @endforeach
        </x-slot:items>
    </x-converge::dropdown>
</li>