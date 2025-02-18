@php
    $versions = app('converge')->getUiVersions();
    $usedVersion = app('converge')->getUiUsedVersion();
@endphp

<div class='flex items-center'>
    @if (count($versions) === 1)
        <div
            class="flex items-center space-x-2 text-xs font-semibold leading-5 transition-all duration-300 border btn-sm btn border-base-300 bg-base-100 text-base-content">
            <span>{{ $usedVersion['label'] }}</span>
        </div>
    @else
        <div>
            <x-converge::dropdown>
                <x-slot:button
                    class="flex items-center space-x-2 text-xs font-semibold leading-5 transition-all duration-300 border btn-sm btn border-base-300 bg-base-300/50 text-base-content hover:bg-base-300 ">
                    <span>{{ $usedVersion['label'] }}</span>
                    <svg class="ml-2 overflow-visible" aria-hidden="true" width="6" height="3">
                        <path d="M0 0L3 3L6 0" fill="none" stroke="currentColor" stroke-width="1.5"
                            stroke-linecap="round"></path>
                    </svg>
                </x-slot:button>
                <x-slot:items class="text-base w-36">
                    @foreach ($versions as $version)
                        <?php
                        $isActive = $usedVersion['isActive']($version['id']);
                        ?>
                        <x-converge::dropdown.item @class([
                            'flex items-center gap-1',
                            'text-primary' => $isActive,
                            'text-base-content' => !$isActive,
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
