@props(['groupItem'])
@php
    $styles = (new \Fluxtor\Converge\Support\Styles(
                    classes: $groupItem->getClasses(),
                    style: $groupItem->getStyles()
            ))->merge(['class'=>' hover:text-primary transition duration-300']);
@endphp

<li>
    <x-converge::dropdown >
        <x-slot:button class="cursor-pointer !px-0">
            <x-converge::icon.label 
                :label="$groupItem->getLabel()" 
                :iconPosition="$groupItem->getIconPosition()->value"
                :$styles 
                :iconSize="$groupItem->getIconSize()?->value"
            >
                <x-slot:icon>
                    @if (filled($groupItem->getOpenIcon()))
                        <span class=" transition-all" x-show="$data.isOpen()">
                            {!! $groupItem->getOpenIcon() !!}
                        </span>
                    @endif

                    @if (filled($groupItem->getCloseIcon()))
                        <span class=" transition-all" x-show="!$data.isOpen()">
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
