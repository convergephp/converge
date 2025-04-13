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
    <button class="shadow-xs btn-sm btn btn-square bg-base-300/50 text-base-content hover:bg-base-300 border-base-300 inline-flex border transition-all duration-300"
            type="button"
            x-on:click="toggleTheme()">

        {{-- LIGHT MODE ICON --}}
        <div x-show="themeIs('light')"
             x-cloak>
            <x-converge::icon class="size-4"
                              icon="light" />
        </div>

        {{-- DARK MODE ICON --}}
        <div class="text-base-content"
             x-show="themeIs('dark')"
             x-cloak>
            <x-converge::icon class="size-4"
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
