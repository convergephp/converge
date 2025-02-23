@props(['item'])

<li>
    <a 
        href="{{ $item->getUrl() }}"
        @if($item->shouldOpenUrlInNewTab())
            target="_blank"
        @endif
        class="w-full text-sm mx-1 flex items-center"
    >
        <x-converge::icon.label 
            :label="$item->getLabel()"
            :icon="$item->getIcon()"
            :iconPosition="$item->getIconPosition()->value"
        />
    </a>
</li>
