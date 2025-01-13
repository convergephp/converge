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
    @foreach (range(0, 5) as $item)
        {{-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, consequuntur! Veritatis minus repellat quod aliquid assumenda itaque, architecto a ullam, similique eum explicabo necessitatibus nostrum ab veniam doloremque quisquam quo molestiae! Veritatis nisi enim fugiat. Consequatur ipsa velit vel fugit modi distinctio dolor vitae quis nisi, tempore commodi voluptates dolore sequi natus ipsum nostrum harum! Vel sequi omnis praesentium cum dolore, tempora dicta qui? Nam et eaque necessitatibus sequi tempora alias voluptates ad deserunt officia ab sit sapiente officiis est, consequatur maiores praesentium inventore qui explicabo ullam, vero numquam architecto, fuga saepe fugiat. Sapiente eaque atque nemo quisquam voluptates! Quidem.</p> --}}
    @endforeach
</x-converge::page>
