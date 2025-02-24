@props(['groupItem'])
<li>
    <x-converge::dropdown>
        <x-slot:button class="cursor-pointer">
            <x-converge::icon.label 
                :label="$groupItem->getLabel()" 
                :iconPosition="$groupItem->getIconPosition()->value"
                :styles="new \Fluxtor\Converge\Support\Styles(
                               classes: $groupItem->getClasses(),
                               style:$groupItem->getStyles()
                        )" 
            >
                <x-slot:icon class="mx-0.5">
                    @if (filled($groupItem->getOpenIcon()))
                        <span class="px-0.5 transition-all" x-show="$data.isOpen()">
                            {!! $groupItem->getOpenIcon() !!}
                        </span>
                    @endif

                    @if (filled($groupItem->getCloseIcon()))
                        <span class="px-0.5 transition-all" x-show="!$data.isOpen()">
                            {!! $groupItem->getCloseIcon() !!}
                        </span>
                    @endif
                </x-slot:icon>
            </x-converge::icon.label>
            @if (blank($groupItem->getOpenIcon()) && blank($groupItem->getCloseIcon()))             
                <x-converge::icons.openable x-model="$data.isOpen()"/>
            @endif
        </x-slot:button>
        <x-slot:items class="w-36">
            @foreach ($groupItem->getItems() as $item)
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
