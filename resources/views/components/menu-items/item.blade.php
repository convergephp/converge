@props(['item'])
<li>
    <a 
        href="{{ $item->getUrl() }}"
        
        @if($item->shouldOpenUrlInNewTab())
            target="_blank"
        @endif
        
        class="w-full btn btn-sm btn-ghost">
        <span>{{ $item->getLabel() }}</span>
    </a>
</li>