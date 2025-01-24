@props([
    'activeClasses'=>'bg-white/5'
])
<li>
    <button
        type="button"
        x-bind:id="$id('tab', getTabIndex($el.parentElement, $refs.tablist))"
        x-on:click="activate($el.id)"
        x-on:focus="activate($el.id)"
        x-bind:tabindex="isActive($el.id) ? 0 : -1"
        x-bind:aria-selected="isActive($el.id)"
        x-bind:class="isActive($el.id) 
            ? @js($activeClasses) 
            : 'border-b-transparent'"
        {{ $attributes->merge(['class'=>'inline-flex items-center px-5 rounded-t-md ']) }}
        role="tab"
    >
        {{ $slot }}
    </button>
</li>
