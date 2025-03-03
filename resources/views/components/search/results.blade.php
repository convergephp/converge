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
    @if ($results->isEmpty())
        <x-converge::search.no-results/>
    @else
        <ul 
            id="search-list"
            x-on:focus-first-element.window="$focus.first()"
            x-on:keydown.up.stop.prevent="handleKeyUp()"
            x-on:keydown.down.stop.prevent="$focus.wrap().next()"
            x-animate
        >

            @foreach ($results as $result )
                <x-converge::search.result-item
                    :title="$result->title"
                    :rawTitle="$result->rawTitle"
                    :url="$result->url"
                />
            @endforeach
        </ul>
    @endif
</div>