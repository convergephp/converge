<input {{ $attributes->merge(['class' => 'block w-full border-none bg-transparent text-base-content  text-sm font-base transition duration-75 placeholder:font-normal placeholder:text-base-content/60 h-12 focus:ring-0 disabled:text-base-content/40 sm:text-sm sm:leading-6']) }}
       id="search-input"
       type="search"
       aria-autocomplete="both"
       aria-labelledby="search-label"
       aria-controls="search-list"
       style="border:none; outline:none"
       autocomplete="off"
       autocorrect="off"
       x-on:keydown.down.prevent.stop="$dispatch('focus-first-element')"
       x-on:keydown.enter.prevent
       autocapitalize="none"
       enterkeyhint="go"
       spellcheck="false"
       placeholder="Search for anything ..."
       autofocus="true"
       maxlength="64" />
