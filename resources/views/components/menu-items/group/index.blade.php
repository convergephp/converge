@props(['groupItem'])
<li>
    <x-converge::dropdown>
        <x-slot:button>
            <x-converge::icon.label 
                :label="$groupItem->getLabel()"
                :iconPosition="$groupItem->getIconPosition()->value"
            >
                <x-slot:icon class="">
                    @if (filled($groupItem->getOpenIcon()))
                        <span x-show="$data.isOpen()" class="px-0.5 transition-all">
                            {!! $groupItem->getOpenIcon() !!}
                        </span>
                    @endif
        
                    @if(filled($groupItem->getCloseIcon()))
                        <span x-show="!$data.isOpen()" class="px-0.5 transition-all">
                            {!! $groupItem->getCloseIcon() !!}
                        </span>
                    @endif
                </x-slot:icon>
            </x-converge::icon.label>                  
            {{-- <svg class="ml-2 overflow-visible" aria-hidden="true" width="6" height="3">
                <path d="M0 0L3 3L6 0" fill="none" stroke="currentColor" stroke-width="1.5"
                    stroke-linecap="round"></path>
            </svg> --}}
        </x-slot:button>
        <x-slot:items class="w-36">
            @foreach($groupItem->getItems() as $item)
                <x-converge::dropdown.item 
                    class="flex items-center gap-1" 
                    :href="$item->getUrl()"
                >
                    <x-converge::icon.label 
                        :label="$item->getLabel()"
                        :icon="$item->getIcon()"
                        :iconPosition="$item->getIconPosition()->value"
                    />
                </x-converge::dropdown.item>            
            @endforeach
        </x-slot:items>
    </x-converge::dropdown>
</li>