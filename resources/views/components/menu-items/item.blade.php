@props(['item'])

<li>
    <a 
        href="{{ $item->getUrl() }}"
        @if($item->shouldOpenUrlInNewTab())
            target="_blank"
        @endif
        {!! \Fluxtor\Converge\format_styles(
            styles: $item->getStyles(),
            classes: $item->getClasses(),
            defaultClasses: "w-full text-sm mx-1 flex items-center"
        ) !!}
    >
        <x-converge::icon.label 
            :label="$item->getLabel()"
            :icon="$item->getIcon()"
            :iconPosition="$item->getIconPosition()->value"
        />
    </a>
</li>
