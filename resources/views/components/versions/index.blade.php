@php
    $versions = app('converge')->getUiVersions();
    $usedVersionRoute= app('converge')->getUsedVersion()?->getRoute();
    // dd($usedVersionRoute);
@endphp
<div 
    class='ml-6 flex items-center  pl-6'>
    <label class="sr-only">
        Theme
    </label>

    <div>
        <x-converge::dropdown position="bottom-right"> 
            <x-slot:button class="text-xs leading-5 font-semibold bg-gray-200 hover:opacity-80 transition-all duration-300 dark:bg-white/5 rounded-full py-1 px-3 flex items-center space-x-2  dark:hover:bg-white/[0.08] text-gray-800 dark:text-gray-200 ">
                  <span>v3.x</span>
                  <svg width="6" height="3" class="ml-2 overflow-visible" aria-hidden="true"><path d="M0 0L3 3L6 0" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg>
            </x-slot:button>
            <x-slot:items class="w-36 dark:bg-transparent bg-gray-100">
                @foreach($versions as $version)
                    @php
                        $isActive = $usedVersionRoute && $version['url'] && str_contains($version['url'], $usedVersionRoute);
                    @endphp
                    <x-converge::dropdown.item 
                        @class([
                            "flex items-center  gap-1",
                            'text-purple-600'=>$isActive
                        ])
                        :href="$version['url']"
                    >
                        <span
                        >{{ $version['label'] }}</span>
                    </x-converge::dropdown.item>
                @endforeach
            </x-slot:items>
        </x-converge::dropdown>
    </div>
    
</div>
