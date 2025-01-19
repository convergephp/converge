@php
    $versions = app('converge')->getUiVersions();
    $usedVersion = app('converge')->getUiUsedVersion();
@endphp

<div class='ml-6 flex items-center pl-6'>
    <label class="sr-only">
        Theme
    </label>
    @if (count($versions) === 1)
        <div
            class="flex items-center space-x-2 rounded-full border border-gray-900/15 bg-white px-3 py-1 text-xs font-semibold leading-5 text-gray-800 transition-all duration-300  dark:border-white/15 dark:bg-white/[0.03] dark:text-gray-200 ">
            <span>{{ $usedVersion['label'] }}</span>
        </div>
    @else
        <div>
            <x-converge::dropdown>
                <x-slot:button
                    class="flex items-center space-x-2 rounded-full border border-gray-900/15 bg-white px-3 py-1 text-xs font-semibold leading-5 text-gray-800 transition-all duration-300 hover:opacity-80 dark:border-white/15 dark:bg-white/[0.03] dark:text-gray-200 dark:hover:bg-white/[0.08]">
                    <span>{{ $usedVersion['label'] }}</span>
                    <svg class="ml-2 overflow-visible" aria-hidden="true" width="6" height="3">
                        <path d="M0 0L3 3L6 0" fill="none" stroke="currentColor" stroke-width="1.5"
                            stroke-linecap="round"></path>
                    </svg>
                </x-slot:button>
                <x-slot:items class="w-36 bg-white dark:bg-transparent">
                    @foreach ($versions as $version)
                        @php    
                            $isActive = $usedVersion['isActive']($version['id']);
                        @endphp 
                        <x-converge::dropdown.item @class([
                            'flex items-center gap-1',
                            'text-purple-600' => $isActive,
                            'dark:text-gray-300 text-gray-900' => !$isActive,
                        ]) :href="$version['url']">
                            <div class="flex items-center justify-between">
                                <span>{{ $version['label'] }}</span>
                                <svg class="size-4" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                            </div>
                        </x-converge::dropdown.item>
                    @endforeach
                </x-slot:items>
            </x-converge::dropdown>
        </div>
    @endif

</div>
