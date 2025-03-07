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
    <button
        class="btn btn-sm btn-outline bg-base-300 bt-base-300 text-base-content border-none transition-all duration-200"
        x-on:click="toggleTheme()">

        {{-- LIGHT MODE ICON --}}
        <div x-show="themeIs('light')" x-cloak>
            <x-converge::icon class="size-4" icon="light" />
        </div>

        {{-- DARK MODE ICON --}}
        <div class="text-base-content" x-show="themeIs('dark')" x-cloak>
            <x-converge::icon class="size-4" icon="dark" />
        </div>
    </button>
</div>
