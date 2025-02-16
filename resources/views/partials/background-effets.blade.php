<div class="relative flex items-center ">
    @if (filled(app('converge')->getTheme()->getSpotlight()))
        @include('converge::components.spotlights.' . app('converge')->getTheme()->getSpotlight()->value)

        {{-- BOTTOM-LEFT --}}
        <div
            class="pointer-events-none fixed bottom-0 right-[90%] h-[300px] w-[200px] rotate-45 rounded-full bg-primary/4 shadow-[50px_50px_40px_3px] shadow-primary/10 blur-2xl">
        </div>
    @endif
</div>
