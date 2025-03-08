<div
    {{
        $attributes->class([
            'flex-1 z-10 w-full mt-1 overflow-y-auto h-full bg-white transition dark:bg-transparent ',
            '[transform:translateZ(0)]',
        ])
    }}
    x-data="{
        handleKeyUp(){
            $focus.getFirst() === $focus.focused() ? document.getElementById('search-input').focus() : $focus.previous();
        },
    }"
>
    <div x-show="!isLoading && results.length === 0">
        <x-converge::search.no-results />
    </div>

    <template x-if="$data.results.length > 0">
        <ul 
            id="search-list"
            x-on:focus-first-element.window="$focus.first()"
            x-on:keydown.up.stop.prevent="handleKeyUp()"
            x-on:keydown.down.stop.prevent="$focus.wrap().next()"
            x-animate
    >

        <template x-for="(result,index)  in results" x-bind:key="index">
            <x-converge::search.result-item />
        </template>
    </ul>
    </template>

</div>