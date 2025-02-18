@props([
    'clusters' => null,
])

@php
    use function Fluxtor\Converge\converge;
    $activeCluster = converge()->getUsedCluster() ?? converge()->getDefaultCluster();
    $id = $activeCluster?->getId();

@endphp

<ul class="mt-2 mb-6 space-y-4">
    @foreach ($clusters as $cluster)
        <li @class([
            'w-full px-1 flex group justify-start  items-center',
            ' [&_a]:text-primary ' => $cluster->getId() === $id,
        ])>
            <a class="flex items-center justify-start font-semibold text-base-content lg:text-sm lg:leading-6"
                href="{{ $cluster->getUrl() }}">
                <span
                    class="p-1 mr-4 rounded-md zinc-box group-hover:bg-primary/10 group-hover:ring-primary ring-1 ring-primary dark:ring-gray-700/40">
                    <x-converge::icon icon="ghost" class="fill-gray-400 size-4" />
                </span>
                {{ $cluster->getLabel() }}
            </a>
        </li>
    @endforeach
</ul>
