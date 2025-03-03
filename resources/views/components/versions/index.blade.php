@php
    $versions = \Fluxtor\Converge\converge()->getUiVersions();
    $usedVersion = \Fluxtor\Converge\converge()->getUiUsedVersion();
@endphp

<div class='flex items-center'>
    @if (count($versions) === 1)
        <div
             class="lg:btn-sm btn border-base-300 bg-base-100 text-base-content flex items-center space-x-2 border text-xs font-semibold leading-5 transition-all duration-300">
            <span>{{ $usedVersion['label'] }}</span>
        </div>
    @else
        <div>
            <x-converge::dropdown>
                <x-slot:button
                        class="btn-sm btn border-base-300 bg-base-300/50 text-base-content hover:bg-base-300 flex items-center space-x-2 border text-xs font-semibold leading-5 transition-all duration-300">
                    <span>{{ $usedVersion['label'] }}</span>
                    <x-converge::icons.openable x-model="$data.isOpen()" />
                </x-slot:button>
                <x-slot:items
                        class="w-36 text-base">
                    @foreach ($versions as $version)
                        <?php
                        $isActive = $usedVersion['isActive']($version['id']);
                        ?>
                        <x-converge::dropdown.item @class([
                            'flex items-center gap-1',
                            'bg-primary/10 text-primary' => $isActive,
                            'text-base-content' => !$isActive,
                        ])
                                                   :href="$version['url']">
                            <div class="flex items-center justify-between">
                                <span>{{ $version['label'] }}</span>
                                <?php if ($isActive): ?>
                                <x-converge::icon icon="check"
                                                  class="size-3" />
                                <?php endif;?>
                            </div>
                        </x-converge::dropdown.item>
                    @endforeach
                </x-slot:items>
            </x-converge::dropdown>
        </div>
    @endif

</div>
