<x-converge::page>
    <div class="relative flex items-center">
        {{-- TOP-RIGHT  --}}
        <div class="pointer-events-none fixed -top-48 right-[10%] h-[400px] w-[90%] rotate-[20deg] rounded-full bg-purple-500/[0.08] shadow-[50px_50px_40px_3px] shadow-violet-500/5 blur-2xl"
            style="border-radius:58% 42% 63% 37% / 35% 31% 69% 65%;">
        </div>
        {{-- BOTTOM-LEFT --}}
        <div
            class="pointer-events-none fixed bottom-0 right-[90%] h-[100px] w-[200px] rotate-45 rounded-full bg-indigo-500/[0.12] shadow-[50px_50px_40px_3px] shadow-cyan-500/10 blur-2xl">
        </div>
    </div>
    <div class="prose max-w-none dark:prose-invert prose-pre:text-gray-500 dark:prose-pre:text-[#babed8] dark:prose-pre:bg-white/5 prose-code:rounded prose-pre:bg-white prose-code:bg-black/5 dark:prose-code:bg-white/20">
        {!! $contents!!}
    </div>
</x-converge::page>
