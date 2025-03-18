@props(['name', 'label', 'active' => false, 'language' => null])

<div data-name="{{ $name }}"
     data-active="{{ $active }}"
     x-on:click="activeTab = '{{ $name }}'"
     :class="{ '!text-primary border-primary border-b': activeTab === '{{ $name }}' }"
     class="text-base-content flex flex-none cursor-pointer items-center px-1 pb-2 pt-2.5 transition-colors">
    <span :class="{ '!text-primary': activeTab === '{{ $name }}' }"
          class="btn btn-xs btn-ghost hover:bg-primary/6 border-none">{{ $label }}</span>
</div>
