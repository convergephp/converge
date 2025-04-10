@props(['name', 'expandable' => true, 'initialHeight' => '100px'])

<div x-data="{
    expanded: false,
    activeTab: null,
    initialize() {
        this.activeTab = this.$nextTick(() => {
            // get default active tab
            this.activeTab = this.$refs.tabHeadings.querySelector('[data-active=true]')?.dataset.name;

            // If no default active tab is set, w'll use the first one
            if (!this.activeTab && this.$refs.tabHeadings.querySelector('[data-name]')) {
                this.activeTab = this.$refs.tabHeadings.querySelector('[data-name]').dataset.name;
            }
        });
    }
}"
     x-init="initialize()"
     class="not-prose bg-base-200 border-1 group relative mb-8 mt-5 rounded-2xl border-gray-400/20">

    {{-- Tab headings --}}
    <div x-ref="tabHeadings"
         class="bg-base-300/20 scrollbar-hide flex overflow-x-auto rounded-t-2xl border-b border-gray-400/20 text-xs font-semibold leading-6">
        {{ $headings }}
    </div>

    {{-- Tab content container --}}
    <div class="relative min-w-full text-sm leading-6"
         :style="expanded || !{{ json_encode($expandable) }} ? {} : { height: '{{ $initialHeight }}' }">

        {{-- Tab bodies --}}
        <div
             class="scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-white/20 dark:scrollbar-thumb-white/20 hover:scrollbar-thumb-white/25 dark:hover:scrollbar-thumb-white/25 active:scrollbar-thumb-white/25 dark:active:scrollbar-thumb-white/25 h-full overflow-hidden overflow-y-hidden p-5 pb-14 [&_pre]:overflow-auto">
            {{ $slot }}
        </div>

        @if ($expandable)
            {{-- Expand gradient and button --}}
            <div x-show="!expanded"
                 class="to-base-200 from-base-200/6 absolute left-0 right-0 top-0 z-[10] flex h-full items-end justify-center rounded-2xl bg-transparent bg-gradient-to-b">
                <button x-on:click="expanded = true"
                        class="rounded-field btn btn-xs btn-ghost bg-base-100 text-primary-content hover:bg-base-100/90 mb-4 flex items-center gap-2 border-none px-2 py-1.5 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width="24"
                         height="24"
                         viewBox="0 0 24 24"
                         fill="none"
                         stroke="currentColor"
                         stroke-width="2"
                         stroke-linecap="round"
                         stroke-linejoin="round"
                         class="lucide lucide-arrow-down duration-400 size-3 transition-transform">
                        <path d="M12 5v14"></path>
                        <path d="m19 12-7 7-7-7"></path>
                    </svg>
                    Expand code
                </button>
            </div>

            {{-- Collapse button --}}
            <div x-show="expanded"
                 class="absolute bottom-4 left-0 right-0 z-[10] flex h-12 items-end justify-center rounded-2xl">
                <button x-on:click="expanded = false"
                        class="rounded-field btn btn-xs btn-ghost bg-base-100 text-primary-content hover:bg-base-100/90 mb-4 flex items-center gap-2 border-none px-2 py-1.5 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width="24"
                         height="24"
                         viewBox="0 0 24 24"
                         fill="none"
                         stroke="currentColor"
                         stroke-width="2"
                         stroke-linecap="round"
                         stroke-linejoin="round"
                         class="lucide lucide-arrow-up duration-400 size-3 transition-transform">
                        <path d="M12 19V5"></path>
                        <path d="m5 12 7-7 7 7"></path>
                    </svg>
                    Collapse code
                </button>
            </div>
        @endif
    </div>
</div>
