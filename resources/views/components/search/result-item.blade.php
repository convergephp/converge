<li role="option"
    x-on:click="addToSearchHistory(result.rawTitle, result.url);$data.close()">
    <a x-bind:href="result.url"
       @class([
           'justify-start scroll-mt-9 mt-1  group bg-base-100 py-2 px-3 duration-300 border border-transparent w-full transition-colors rounded-field focus:bg-base-100/60 focus:border focus-visible:outline-none focus:border-primary/30 hover:bg-base-300/60 hover:border-primary/20 hover:border flex justify-between items-center',
           'p-3'
       ])>
        <div class="flex flex-col items-start justify-start text-start">
            <h4 x-html="result.title"
                @class([
                    'text-md text-start block w-full font-base text-base-content',
                ])>
            </h4>

            <span x-html="result.file_name"
                  class="text-base-content/60 rounded-md py-1 text-start text-sm"></span>
        </div>
    </a>
</li>
