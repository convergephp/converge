@props(['item'])
    <a

    {!!
        (new \Converge\Support\Styles(
            classes: $item->getClasses(),
            style:$item->getStyles()
        ))->merge([])
          ->overideAttributes([
            'class' => 'text-sm text-base-content hover:text-primary whitespace-nowrap'
        ])
    !!}
        href="{{ $item->getUrl() }}"
        @if($item->shouldOpenUrlInNewTab())
            target="_blank"
        @endif
    >
        <x-converge::icon.label
            :label="$item->getLabel()"
            :icon="$item->getIcon()"
            :iconPosition="$item->getIconPosition()->value"/>
    </a>
