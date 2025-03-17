<li 
    role="option"
    x-on:click="addToSearchHistory(result.rawTitle, result.url);$data.close()"
>
    <a 
        x-bind:href="result.url"
        @class([
            'justify-start scroll-mt-9 mx-1 my-1 dark:bg-white/5 group bg-gray-50 py-2 px-3 duration-300 transition-colors rounded-lg focus:bg-gray-100 dark:focus:bg-white/10 focus:border focus-visible:outline-none focus:border-gray-400 dark:focus:border-white/30  hover:bg-gray-100 dark:hover:bg-white/10 flex justify-between items-center',
            'p-3',
        ])
        >
        <div class="flex flex-col justify-start items-start text-start">
            <h4
                x-html="result.title"
                @class([
                    'text-md text-start block w-full font-medium text-gray-950 dark:text-white',
                ])
            >
            </h4>
            
            <span x-html="result.file_name" class="text-gray-400 text-sm text-start rounded-md py-1"></span>
        </div>
    </a>
</li>
