@props(['groupItem'])
<li>
    <x-converge::dropdown>
        <x-slot:button>
            {{ $groupItem->getLabel() }}
        </x-slot:button>
        <x-slot:items class="w-36">
            {{-- @foreach($groupItem->getItems() as $item)
                <x-converge::dropdown.item class="flex items-center gap-1" x-on:click="setTheme('light')">
                    <span>{{ $item->getLabel() }}</span>
                </x-converge::dropdown.item>            
            @endforeach --}}
        </x-slot:items>
    </x-converge::dropdown>
</li>