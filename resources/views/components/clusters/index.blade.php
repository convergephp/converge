@props([
    'clusters' => null,
])

@php
    use function Converge\converge;
    $activeCluster = converge()->getUsedCluster() ?? converge()->getDefaultCluster();
    $id = $activeCluster?->getId();
@endphp

<ul class="mb-6 mt-2 space-y-4">
    @foreach ($clusters as $cluster)
        <li @class([
            'w-full px-1 flex group justify-start  items-center',
            ' [&_a]:text-primary ' => $cluster->getId() === $id,
        ])>
            <a class="text-base-content flex items-center justify-start font-semibold lg:text-sm lg:leading-6"
               href="{{ $cluster->getUrl() }}">
                @if (filled($cluster->getIcon()))
                    <span @class([
                        'group-hover:bg-primary/20 rounded-selector btn btn-square btn-xs lg:!btn-sm mr-3 border border-gray-400/20 bg-transparent',
                        '!bg-primary/20' => $cluster->getId() === $id,
                    ])>
                        {!! $cluster->getIcon() !!}
                    </span>
                @else
                    <span @class([
                        'group-hover:bg-primary/20 rounded-selector btn btn-square btn-xs lg:!btn-sm mr-3 border border-gray-400/20 bg-transparent',
                        '!bg-primary/20' => $cluster->getId() === $id,
                    ])>
                        <x-converge::icon icon="ghost"
                                          class="size-4 fill-gray-400" />
                    </span>
                @endif
                {{ $cluster->getLabel() }}
            </a>
        </li>
    @endforeach
</ul>
