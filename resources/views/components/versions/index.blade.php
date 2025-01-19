@php
    $versions = app('converge')->getUiVersions();
    $usedVersionRoute = app('converge')->getUsedVersion()?->getRoute();
    $usedVersionLabel = app('converge')->getUsedVersion()?->getLabel();
    // dd($usedVersionRoute);
@endphp
<div 
    class='ml-6 flex items-center  pl-6'>
    <label class="sr-only">
        Theme
    </label>

    <div>
        <x-converge::dropdown> 
            <x-slot:button class="text-xs leading-5 font-semibold bg-white hover:opacity-80 transition-all duration-300 dark:bg-white/[0.03] rounded-full py-1 px-3 flex items-center space-x-2 border dark:border-white/15 border-gray-900/15  dark:hover:bg-white/[0.08] text-gray-800 dark:text-gray-200 ">
                  <span>{{ $usedVersionLabel }}</span>
                  <svg width="6" height="3" class="ml-2 overflow-visible" aria-hidden="true"><path d="M0 0L3 3L6 0" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg>
            </x-slot:button>
            <x-slot:items class="w-36 dark:bg-transparent bg-white">
                @foreach($versions as $version)
                    @php
                        $isActive = $usedVersionRoute && $version['url'] && str_contains($version['url'], $usedVersionRoute);
                    @endphp
                    <x-converge::dropdown.item 
                        @class([
                            "flex items-center gap-1",
                            'text-purple-600'=>$isActive,
                            'dark:text-gray-300 text-gray-900'=>!$isActive
                        ])
                        :href="$version['url']"
                    >
                        <div class="flex items-center justify-between">
                            <span
                            >{{ $version['label'] }}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                              </svg>
                        </div>                          
                    </x-converge::dropdown.item>
                @endforeach
            </x-slot:items>
        </x-converge::dropdown>
    </div>
    
</div>
