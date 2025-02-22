@props(['item'])
<li>
    <a href="{{ $item->getUrl() }}" class="w-full btn btn-sm btn-ghost">
        <span>{{ $item->getLabel() }}</span>
    </a>
</li>