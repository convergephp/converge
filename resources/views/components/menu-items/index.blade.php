@php
    $items = Fluxtor\Converge\converge()->getMenuItems();
@endphp

<div class="px-2">
    <ul class="flex items-center">
        @foreach($items as $item)
        <li class="">
            {{ $item->getLabel() }}
        </li>
        @endforeach
    </ul>
</div>
