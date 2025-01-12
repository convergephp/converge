<nav class="dark:bg-white/[0.03] bg-gray-100 text-white backdrop-blur-2xl z-40 sticky top-0 rounded-xl">
    <div
        class="supports-backdrop-blur:bg-white/60 z-40 w-full flex-none  border-lg backdrop-blur transition-colors duration-500 dark:border-slate-50/[0.06] bg-transparent lg:z-50 lg:border-b lg:border-slate-900/10">
        <div class="max-w-8xl mx-auto">
            <div class="mx-4 border-b py-4 dark:border-slate-300/10 lg:mx-0 lg:border-0 lg:px-8">
                <div class="relative flex items-center">
                    <div class="relative ml-auto space-x-2 hidden items-center lg:flex">
                        <nav class="text-sm font-semibold leading-6 text-slate-700 dark:text-slate-200">
                            <ul class="flex space-x-8">
                                <li>
                                    <a 
                                        @class(["dark:hover:primary/90 rounded-md dark:bg-transparent x px-2 py-1 transition-colors duration-200 hover:text-primary"])
                                        href="#">components</a>
                                </li>    
                            </ul>
                        </nav>
                        <x-theme-switcher class="border-l border-slate-200 dark:border-slate-800"/>

                        <a href="#">
                            <span class="absolute top-0 right-0 flex w-3 h-3">
                                <span class="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-purple-500"></span>
                                <span class="relative inline-flex w-3 h-3 rounded-full bg-purple-500"></span>
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                class="w-8 h-8 stroke-slate-600 group-hover:stroke-slate-500">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                        </a>

                        
                    </div>
                
                </div>
            </div>
        </div>
    </div>
</nav>
