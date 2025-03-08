<div x-data="search({
    route: {{ Illuminate\Support\Js::from(route('converge::search')) }}
})">
    <x-converge::modal
        openEvent="open-search"
    >
        <x-slot:header class="dark:border-gray-800 border-b border-gray-300">
            <form class="relative flex w-full items-center  py-0.5">
                <label
                    class="dark:text-gray-600 flex items-center justify-center text-gray-400"
                    id="search-label"
                    for="search-input"
                >
                    <span class="mr-3">
                        <x-converge::icon
                            icon="search"
                            size="5"
                            stroke="3"
                            x-show="!isLoading"
                        />
                        <x-converge::icon
                            icon="loading-indicator"
                            x-show="!isLoading"
                        />
                    </span>
                </label>
                <x-converge::search.input x-model.debounce.100ms="query"/>
            </form>
        </x-slot:header>

        <div >
            <template x-if="query.length > 0">
                <x-converge::search.results/>
            </template>
            <template x-if="query.length == 0 && !(search_history.length > 0 || favorite_items.length > 0)">
                <x-converge::search.empty-query />
            </template>
        </div>

        </x-converge::modal>
</div>