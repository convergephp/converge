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
    <div class="bg-gray-20 prose dark:prose-invert">
        {{-- @dd() --}}
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed assumenda fuga soluta minima, reiciendis quas velit est ipsum inventore officiis ducimus officia vero commodi tenetur! Rerum laboriosam nam mollitia quasi voluptatum corporis! Corporis optio delectus accusamus hic nisi! Suscipit quam praesentium aperiam quas laboriosam atque exercitationem doloribus iusto. Quis quod numquam neque mollitia accusantium consectetur dolor natus dolorem illo hic aspernatur quas deleniti asperiores beatae necessitatibus, ratione delectus officiis, accusamus magnam eum sapiente optio incidunt. Eligendi suscipit cupiditate architecto voluptates tempore culpa doloremque at sed ipsam eum quisquam ipsa ea sit et, magni distinctio ullam quos adipisci deleniti! Tempora, inventore?
        {{-- {!! str()->markdown(file_get_contents(realPath(__DIR__.'/../../../packages/converge/resources/views/markdown.md'))) !!} --}}
    </div>
</x-converge::page>
