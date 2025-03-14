<input
    {{ $attributes->merge(['class'=>"dark:text-white block w-full border-none bg-transparent py-1.5 text-base font-semibold text-gray-950 transition duration-75 placeholder:font-normal placeholder:text-gray-400 focus:ring-0 disabled:text-gray-500 sm:text-sm sm:leading-6"]) }}
    id="search-input"
    type="search" 
    aria-autocomplete="both" 
    aria-labelledby="search-label" 
    aria-controls="search-list"
    style="border:none; outline:none" 
    autocomplete="off" 
    autocorrect="off" 
    x-on:keydown.down.prevent.stop="$dispatch('focus-first-element')"
    x-on:keydown.enter.prevent autocapitalize="none" 
    enterkeyhint="go" 
    spellcheck="false"
    placeholder="Search for anything ..." 
    autofocus="true" 
    maxlength="64"
/>
