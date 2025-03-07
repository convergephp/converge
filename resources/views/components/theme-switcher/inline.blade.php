<div x-data="{
    theme: localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', this.theme);

        if (this.theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        $dispatch('theme-changed', this.theme);
    }
}"
     x-init="if (theme === 'dark') {
         document.documentElement.classList.add('dark');
     } else {
         document.documentElement.classList.remove('dark');
     }
     
     window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
         if (!localStorage.getItem('theme')) {
             theme = e.matches ? 'dark' : 'light';
             if (theme === 'dark') {
                 document.documentElement.classList.add('dark');
             } else {
                 document.documentElement.classList.remove('dark');
             }
         }
     });">
    <button x-on:click="toggleTheme()"
            class="btn btn-sm btn-outline bg-base-300 bt-base-300 text-base-content border-none transition-all duration-200">

        {{-- LIGHT MODE ICON --}}
        <div x-show="theme === 'light'"
             x-cloak>
            <x-converge::icon icon="light"
                              class="size-4" />
        </div>

        {{-- DARK MODE ICON --}}
        <div class="text-base-content"
             x-show="theme === 'dark'"
             x-cloak>
            <x-converge::icon icon="dark"
                              class="size-4" />
        </div>
    </button>
</div>
