@props([
    'type' => 'button',
    'icon' => null,
    'title' => null, // this is just the native button's title (for accessibilty)
    'clickFunction' => null,
])

<button 
    data-action
    type="{{ $type }}" 
    title="{{ $title }}"
    tabindex="1"
    x-on:click.stop="{{ $clickFunction }}"
    {{ $attributes->merge(['class' => 'rounded-full cursor-pointer focus-visible:outline-none focus:bg-base-300 focus:border-primary/30 focus:bg-base-300/40  border border-transparent  appearance-none rounded-full  bg-none p-1.5 text-gray-400 text-inherit  ']) }}
>
    <x-converge::icon :icon="$icon"/>
</button>
