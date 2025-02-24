@props(['item'])

<li 
    {!!
        (new \Fluxtor\Converge\Support\Styles(
            classes: $item->getClasses(),
            style:$item->getStyles()
        ))->merge([
            'class' => 'px-0.5'
        ])


    !!}
>
    <a 
        href="{{ $item->getUrl() }}"
        @if($item->shouldOpenUrlInNewTab())
            target="_blank"
        @endif
    >
        <x-converge::icon.label 
            :label="$item->getLabel()"
            :icon="$item->getIcon()"
            :iconPosition="$item->getIconPosition()->value"
        />
    </a>
</li>
