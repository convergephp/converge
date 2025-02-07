@props([
    'clusters' => null
])

<ul>
    @foreach ($clusters as $cluster)
        <li><a class="group mb-4 flex items-center font-semibold text-gray-500 lg:text-sm lg:leading-6 dark:text-gray-400"
                href="/docs/installation">
                <div
                    class="dark:group-hover:highlight-white/10 dark:highlight-white/10 mr-4 rounded-md shadow-sm ring-1 ring-slate-900/5 group-hover:shadow group-hover:shadow-gray-200 group-hover:ring-slate-900/10 dark:bg-gray-500 dark:shadow-none dark:ring-0 dark:group-hover:bg-gray-500 dark:group-hover:shadow-none">
                    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
                        <path
                            class="fill-gray-200 group-hover:fill-gray-500 dark:fill-gray-300 dark:group-hover:fill-gray-300"
                            fill-rule="evenodd" clip-rule="evenodd"
                            d="M8.5 7c1.093 0 2.117.27 3 .743V17a6.345 6.345 0 0 0-3-.743c-1.093 0-2.617.27-3.5.743V7.743C5.883 7.27 7.407 7 8.5 7Z">
                        </path>
                        <path
                            class="fill-gray-400 group-hover:fill-gray-500 dark:fill-gray-200 dark:group-hover:fill-gray-200"
                            fill-rule="evenodd" clip-rule="evenodd"
                            d="M15.5 7c1.093 0 2.617.27 3.5.743V17c-.883-.473-2.407-.743-3.5-.743s-2.117.27-3 .743V7.743a6.344 6.344 0 0 1 3-.743Z">
                        </path>
                    </svg>
                </div>{{ $cluster->getLabel() }}
            </a>
        </li>
    @endforeach
</ul>
