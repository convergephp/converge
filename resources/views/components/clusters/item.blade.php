@php
    use function Fluxtor\Converge\converge;
    $activeCluster = converge()->getUsedCluster() ?? converge()->getDefaultCluster();
    $id = $activeCluster?->getId();
    $isActive = $cluster->getId() === $id;
@endphp
<li @class([
    'w-full px-1 flex group justify-start hover:ring-primary  items-center',
    '[&_a]:text-primary ' => $isActive,
])>
    <a 
        class="flex items-center justify-start font-semibold text-base-content lg:text-sm lg:leading-6"
        href="{{ $cluster->getUrl() }}"
    >
        <span
            @class([
                'p-1 mr-4 rounded-md zinc-box group-hover:bg-primary/10 group-hover:ring-primary ring-1',
                'ring-transparent' => !$isActive,
                'ring-primary' => $isActive,
            ])
        >
            <x-converge::icon icon="ghost" class="fill-gray-400 size-4" />
        </span>
        {{ $cluster->getLabel() }}
    </a>
</li>