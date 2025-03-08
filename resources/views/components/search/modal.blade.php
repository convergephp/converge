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
                <x-converge::search.input x-model="$data.query"/>
            </form>
        </x-slot:header>

        <div >
            <template x-if="$data.query.length >0">
                <x-converge::search.results
                    {{-- :results="[]"  --}}
                />
            </template>
            <template x-if="$data.query.length == 0 && ($data.search_history.length > 0 || $data.favorite_items.length > 0)">
                <x-converge::search.empty-query />
            </template>
        </div>

        </x-converge::modal>
</div>