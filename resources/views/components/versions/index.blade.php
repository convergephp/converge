@php
    $versions = app('converge')->getVersions();
    // dd($versions);
@endphp
<div 
    class='ml-6 flex items-center  pl-6'>
    <label class="sr-only">
        Theme
    </label>

    <div x-data="{
        theme: null,
        init() {
            this.theme = localStorage.getItem('theme')
            this.$watch('theme', () => {
                $dispatch('theme-changed', this.theme)
            })
        },
        setTheme(val){
            this.theme = val;
        }, 
        themeIs(mode){
            return this.theme === mode;
        }  
    }">


        <x-converge::dropdown position="bottom-right"> 
            <x-slot:button class="text-xs leading-5 font-semibold bg-white dark:bg-white/5 rounded-full py-1 px-3 flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-white/[0.08] text-gray-800 dark:text-gray-200 ">
                  <span>v3.0.4</span>
                  <svg width="6" height="3" class="ml-2 overflow-visible" aria-hidden="true"><path d="M0 0L3 3L6 0" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg>
            </x-slot:button>
            <x-slot:items class="w-36 dark:bg-transparent bg-gray-100">
                @foreach($versions as $version)
                    <x-converge::dropdown.item class="flex items-center gap-1" x-on:click="setTheme('light')">
                        <span x-bind:class="themeIs('light') ? 'text-violet-500 dark:text-violet-400':'text-gray-900 dark:text-white'">{{ $version->getLabel() }}</span>
                    </x-converge::dropdown.item>
                @endforeach
            </x-slot:items>
        </x-converge::dropdown>
    </div>
    
</div>
