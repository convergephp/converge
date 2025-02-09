<x-converge::layout.base>
    <div class="">
        {{-- NAVBARE --}}
        <div>
            <x-navbar />
        </div>

        {{-- CONTENT ==> FROM page/index.blade.php' --}}
        <div class="flex-1">
            {{ $slot }}
        </div>
    </div>
</x-converge::layout.base>
