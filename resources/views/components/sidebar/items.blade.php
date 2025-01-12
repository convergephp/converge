@props(['navItems' => null])
@php
    use App\Support\Packages\NavigationGroup;    
    use App\Support\Packages\NavigationItem;    
@endphp

<ul class="bg-gray-100 dark:bg-black">
    @foreach ($navItems as $item)
        @if ($item instanceof NavigationItem)
         <x-packages.sidebar.item :label="$item->getLabel()" :url="$item->getUrl()"/>   
        @elseif($item instanceof NavigationGroup || count($item->getItems()>=1))
        <li class="mt-12 lg:mt-8">
            <h5 class="mb-3.5  font-semibold text-gray-900 lg:mb-2.5 dark:text-gray-200">
                {{ $item->getLabel() }}
            </h5>
            <x-packages.sidebar.sub-nav-items :items="$item->getItems()"/>
        @endif
    @endforeach
</ul>

