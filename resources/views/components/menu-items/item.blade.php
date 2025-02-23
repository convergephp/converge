@props(['item'])

<?php
    $icon = $item->getIcon();
    $iconPosition = $item->getIconPosition()->value;
    $isIconBefore = filled($icon) && $iconPosition === \Fluxtor\Converge\Enums\IconPosition::Before->value;
    $isIconAfter = filled($icon) && $iconPosition === \Fluxtor\Converge\Enums\IconPosition::After->value;
?>

<li>
    <a 
        href="{{ $item->getUrl() }}"
        @if($item->shouldOpenUrlInNewTab())
            target="_blank"
        @endif
        class="w-full text-sm mx-1 flex items-center "
    >
        @if($isIconBefore)
            {!! $icon !!}
        @endif
        
        <span>{{ $item->getLabel() }}</span>
        
        @if($isIconAfter)
            {!! $icon !!}
        @endif
    </a>
</li>
