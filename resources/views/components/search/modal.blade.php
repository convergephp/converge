@php
    $routeName = resolve(\Converge\Repository::class)->getActiveRouteName();
@endphp



<div x-data="search({
    route: {{ Illuminate\Support\Js::from(route("$routeName.search")) }},
    moduleId: {{ Illuminate\Support\Js::from(\Converge\converge()->getId()) }}
})">
    <x-converge::modal openEvent="open-search">
        <x-slot:header
                class="rounded-t-box">
            <form class="relative flex w-full items-center">
                <label class="text-base-content flex items-center justify-center"
                       id="search-label"
                       for="search-input">
                    <span class="ml-1.5 mr-3">
                        <span x-show="!isLoading">
                            <x-converge::icon icon="search"
                                              class="size-6" />
                        </span>

                        <span x-show="isLoading">
                            <x-converge::icon icon="loading-indicator"
                                              class="size-6" />
                        </span>
                    </span>
                </label>
                <x-converge::search.input x-model.debounce.100ms="query" />
            </form>
        </x-slot:header>

        <div class="">
            <template x-if="query.length > 0">
                <x-converge::search.results />
            </template>
            <template x-if="results.length === 0 && (search_history.length > 0 || favorite_items.length > 0)">
                <div class="global-search-modal w-full"
                     x-data="{
                         handleKeyUp() {
                                 focusedEl = $focus.focused()
                                 if ($focus.getFirst() === $focus.focused()) {
                                     document.getElementById('search-input').focus();
                                     return
                                 }
                                 if (focusedEl.hasAttribute('data-action')) {
                                     const parentLi = focusedEl.closest('li');
                                     if (parentLi) {
                                         const actions = parentLi.querySelectorAll('[data-action]');
                                         if (Array.from(actions).indexOf(focusedEl) === 0) {
                                             parentLi.focus();
                                             return;
                                         }
                                     }
                                 }
                                 $focus.previous()
                             },
                             handleKeyDown() {
                                 focusedEl = $focus.focused()
                                 if (focusedEl.tagName == 'LI') {
                                     actions = focusedEl.querySelectorAll('[data-action]');
                                     if (actions.length > 0) {
                                         actions[0].focus();
                                         return;
                                     }
                                 }
                                 $focus.wrap().next();
                             },
                     }"
                     x-on:focus-first-element.window="$focus.first()"
                     x-on:keydown.up.stop.prevent="handleKeyUp()"
                     x-on:keydown.down.stop.prevent="handleKeyDown()">
                    <template x-if="search_history.length <=0 && favorite_items.length <=0 ">
                        <p class="text-base-content/60 w-full p-4 text-center">
                            Please enter a search term to get started.
                        </p>
                    </template>
                    <template x-if="search_history.length > 0">
                        <div>
                            <div class="top-0 z-10">
                                <h3
                                    class="text-primary relative flex flex-1 flex-col justify-center overflow-x-hidden text-ellipsis whitespace-nowrap px-4 py-2 text-start text-sm font-semibold capitalize">
                                    Recent
                                </h3>
                            </div>
                            <ul x-animate>
                                <template x-for="(result,index) in search_history">
                                    <x-converge::search.summary.item x-bind:key="index">
                                        <span x-html="result.title">
                                        </span>
                                        <x-slot:actions>
                                            <x-converge::search.summary.action-button title="delete"
                                                                                      clickFunction="deleteFromHistory(result.title)"
                                                                                      icon="x" />
                                            <x-converge::search.summary.action-button title="favorite this item"
                                                                                      clickFunction="addToFavorites(result.title,result.url)"
                                                                                      icon="favorite" />
                                        </x-slot:actions>
                                    </x-converge::search.summary.item>
                                </template>
                            </ul>

                        </div>
                    </template>
                    <template x-if="favorite_items.length > 0">
                        <div>
                            <div class="top-0 z-10">
                                <h3
                                    class="text-primary relative flex flex-1 flex-col justify-center overflow-x-hidden text-ellipsis whitespace-nowrap px-4 py-2 text-start text-sm font-semibold capitalize">
                                    Favorites
                                </h3>
                            </div>
                            <ul x-animate>
                                <template x-for="(result,index) in favorite_items">
                                    <x-converge::search.summary.item x-bind:key="index"
                                                                     x-on:click="addToSearchHistory(result.title,result.url)">
                                        <span x-html="result.title">
                                        </span>
                                        <x-slot:actions>
                                            <x-converge::search.summary.action-button title="delete"
                                                                                      clickFunction="deleteFromFavorites(result.title,result.url)"
                                                                                      icon="x" />
                                        </x-slot:actions>
                                    </x-converge::search.summary.item>
                                </template>
                            </ul>
                        </div>
                    </template>
                </div>
            </template>
        </div>
        <x-slot:footer>
            <x-converge::search.footer />
        </x-slot:footer>
    </x-converge::modal>
</div>
