@props(['item'])



<li>
    <a 
        href="{{ $item->getUrl() }}"
        @if($item->shouldOpenUrlInNewTab())
            target="_blank"
        @endif
        class="w-full text-sm mx-1 flex items-center"
    >
        @if($isIconBefore)
        <span class="px-0.5">
            {!! $icon !!}
        </span>
        @endif
        
        <span>{{ $item->getLabel() }}</span>
        
        @if($isIconAfter)
        <span class="px-0.5">
            {!! $icon !!}
        </span>
        @endif
    </a>
</li>
