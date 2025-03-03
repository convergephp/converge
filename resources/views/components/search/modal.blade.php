<x-converge::modal openEvent="open-search" class="relative"
    >
        <x-slot:trigger>
        </x-slot>
        <x-slot:header class="dark:border-gray-800 border-b border-gray-300 px-2">
            <form class="relative flex w-full items-center px-1 py-0.5">
                <label 
                    class="dark:text-gray-600 flex items-center justify-center text-gray-400" 
                    id="search-label"
                    for="search-input"
                >
                    <x-converge::icon
                        icon="search"
                        size="5" 
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
        slot
        
    </x-converge::modal>