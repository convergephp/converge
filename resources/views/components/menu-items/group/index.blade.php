@props(['groupItem'])
@php
    $styles = (new \Fluxtor\Converge\Support\Styles(classes: $groupItem->getClasses(), style: $groupItem->getStyles()))
        ->merge([])
        ->overideAttributes(['class' => 'text-sm text-base-content hover:text-primary whitespace-nowrap']);
    // dd($styles)
@endphp

<li>
    <x-converge::dropdown>
        <x-slot:button
                class="hover:text-primary cursor-pointer !px-0 transition duration-300">
            <x-converge::icon.label :label="$groupItem->getLabel()"
                                    :iconPosition="$groupItem->getIconPosition()->value"
                                    :$styles
                                    :iconSize="$groupItem->getIconSize()?->value">
                <x-slot:icon>
                    @if (filled($groupItem->getOpenIcon()))
                        <span class="transition-all"
                              x-show="$data.isOpen()">
                            {!! $groupItem->getOpenIcon() !!}
                        </span>
                    @endif

                    @if (filled($groupItem->getCloseIcon()))
                        <span class="transition-all"
                              x-show="!$data.isOpen()">
                            {!! $groupItem->getCloseIcon() !!}
                        </span>
                    @endif
                </x-slot:icon>
            </x-converge::icon.label>
            @if (blank($groupItem->getOpenIcon()) && blank($groupItem->getCloseIcon()))
                <x-converge::icons.openable x-model="$data.isOpen()" />
            @endif
        </x-slot:button>
        <x-slot:items
                class="rounded-box bg-base-200 flex min-w-56 flex-col gap-4 px-4 py-4">
            @foreach ($groupItem->getItems()->sortBy('sort')->values() as $item)
                <x-converge::menu-items.item :$item />
            @endforeach
        </x-slot:items>
    </x-converge::dropdown>
</li>
