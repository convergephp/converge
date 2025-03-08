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
    {{ $attributes->merge(['class' => 'rounded-full cursor-pointer focus-visible:outline-none  focus:bg-gray-100 dark:focus:bg-white/10 border focus:border-gray-400 dark:focus:border-white/30 appearance-none rounded-full border-none bg-none p-1.5 text-gray-400 text-inherit dark:hover:bg-white/5 hover:bg-gray-800/5']) }}
>
    <x-converge::icon :icon="$icon"/>
</button>
