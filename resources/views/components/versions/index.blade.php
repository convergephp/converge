@php
    $versions = \Converge\converge()->getUiVersions();
    $usedVersion = \Converge\converge()->getUiUsedVersion();
@endphp

<div {{ $attributes->merge(['class' => 'flex items-center']) }}>
    @if (count($versions) === 1)
        <div
             class="btn-sm btn border-base-300 bg-base-100 text-base-content hover:border-primary/80 flex items-center border">
            <span>{{ $usedVersion['label'] }}</span>
        </div>
    @else
        <div>
            <x-converge::dropdown>
                <x-slot:button
                        class="btn-sm btn border-base-300 bg-base-100 text-base-content hover:border-primary/80 flex items-center border">
                    <span>{{ $usedVersion['label'] }}</span>
                    <x-converge::icons.openable class="stroke size-3"
                                                x-model="$data.isOpen()" />
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
