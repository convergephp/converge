@php
    use function Converge\converge;
    $activeCluster = converge()->getUsedCluster() ?? converge()->getDefaultCluster();
    $id = $activeCluster?->getId();
    $isActive = $cluster->getId() === $id;
    $icon = $cluster->getIcon();
@endphp
<li @class([
    'w-full px-1 flex group justify-start hover:ring-primary  items-center',
    '[&_a]:text-primary ' => $isActive,
])>
    <a class="text-base-content flex items-center justify-start font-semibold lg:text-sm lg:leading-6"
       href="{{ $cluster->getUrl() }}">
        <span @class([
            'p-1 mr-4 rounded-md zinc-box group-hover:bg-primary/10 group-hover:ring-primary ring-1',
            'ring-transparent' => !$isActive,
            'ring-primary' => $isActive,
        ])>
            <x-converge::icon icon="ghost"
                              class="size-4 fill-gray-400" />
        </span>
        {{ $cluster->getLabel() }}
    </a>
</li>
