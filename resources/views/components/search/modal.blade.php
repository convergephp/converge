<div x-data="search">
    <x-converge::modal
        openEvent="open-search"
        class="relative"
    >
            <x-slot:header class="dark:border-gray-800 border-b border-gray-300">
                <form class="relative flex w-full items-center  py-0.5">
                    <label
                        class="dark:text-gray-600 flex items-center justify-center text-gray-400"
                        id="search-label"
                        for="search-input"
                    >
                        <x-converge::icon
                            icon="search"
                            size="5"
                            class="mr-3"
                            stroke="3"
                        />
                        <div
                            class="hidden"
                            wire:loading.class.remove="hidden"
                        >
                        </div>
                    </label>
                    <x-converge::search.input />
                </form>
            </x-slot:header>
            <template x-if="query.length >0">
                <x-converge::search.results
                    {{-- :results="[]"  --}}
                />
            </template>
            <template x-if="query.length == 0 && (search_history.length > 0 || favorite_items.length > 0)">
                <x-converge::search.empty-query />
            </template>
        </x-converge::modal>
</div>