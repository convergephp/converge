@props(['name', 'active' => false, 'language' => null])

<div x-show="activeTab === '{{ $name }}'"
     data-name="{{ $name }}"
     class="[&_pre]:!bg-transparent">
    {!! (new Fluxtor\Converge\Documents\Markdown())->convert($slot) !!}
</div>
