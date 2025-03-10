<div x-data="{
    theme: null,
    init() {
        this.theme = localStorage.getItem('theme')
        this.$watch('theme', () => {
            $dispatch('theme-changed', this.theme)
        })
    },
    setTheme(val) {
        this.theme = val;
    },
    themeIs(mode) {
        return this.theme === mode;
    },
    toggleTheme() {
        this.theme === 'dark' ?
            this.theme = 'light' :
            this.theme = 'dark';

    }
}">
    <button class="text-base-content ml-2 flex cursor-pointer items-center border-none transition-all duration-200"
            type="button"
            x-on:click="toggleTheme()">

        {{-- LIGHT MODE ICON --}}
        <div x-show="themeIs('light')"
             x-cloak>
            <x-converge::icon class="size-5"
                              icon="light" />
        </div>

        {{-- DARK MODE ICON --}}
        <div class="text-base-content"
             x-show="themeIs('dark')"
             x-cloak>
            <x-converge::icon class="size-5"
                              icon="dark" />
        </div>

        <div class="text-base-content"
             x-show="themeIs('system')"
             x-cloak>
            <x-converge::icon class="size-6"
                              icon="system" />
        </div>
    </button>
</div>
