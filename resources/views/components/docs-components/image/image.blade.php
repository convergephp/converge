@props(['image', 'alt' => '', 'caption' => '', 'class' => ''])
<div x-data="{
    zoomed: false,
    imgSrc: '{{ $image }}',
    imgAlt: '{{ $alt }}',
    imgCaption: '{{ $caption }}',
    scrollbarWidth: 0,
    toggleZoom() {
        if (!this.zoomed) {
            this.scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.paddingRight = `${this.scrollbarWidth}px`;
            document.querySelector('body').style.overflow = 'hidden';
            this.zoomed = true;
        } else {
            this.zoomed = false;
            setTimeout(() => {
                document.body.style.paddingRight = '';
                document.querySelector('body').style.overflow = '';
            }, 300);
        }
    }
}"
     class="{{ $class }} relative">
    {{-- Zoome overflow --}}
    <div x-show="zoomed"
         x-transition:enter="transition ease-out duration-300"
         x-transition:enter-start="opacity-0"
         x-transition:enter-end="opacity-100"
         x-transition:leave="transition ease-in duration-300"
         x-transition:leave-start="opacity-100"
         x-transition:leave-end="opacity-0"
         class="bg-base-200/50 fixed inset-0 z-40 backdrop-blur-sm"
         x-on:click="toggleZoom"
         style="display: none;"></div>

    {{-- Normal container --}}
    <div x-show="!zoomed"
         class="bg-base-300/20 overflow-hidden rounded-2xl border border-gray-400/10 p-2 shadow-sm transition-all hover:shadow-md">
        <div class="relative flex h-[22rem] flex-col justify-start overflow-hidden rounded-2xl">
            <img x-on:click="toggleZoom"
                 src="{{ $image }}"
                 alt="{{ $alt }}"
                 class="-mb-10 -mt-10 h-full w-full flex-grow cursor-zoom-in rounded-2xl object-cover" />
        </div>
        @if ($caption)
            <div class="px-4 py-4 text-center text-sm text-gray-400">
                {{ $caption }}
            </div>
        @endif
    </div>

    {{-- zoome container --}}
    <div x-show="zoomed"
         x-on:keydown.escape.window="toggleZoom()"
         x-transition:enter="transition ease-out duration-300"
         x-transition:enter-start="opacity-0 scale-90"
         x-transition:enter-end="opacity-100 scale-100"
         x-transition:leave="transition ease-in duration-300"
         x-transition:leave-start="opacity-100 scale-100"
         x-transition:leave-end="opacity-0 scale-90"
         class="fixed inset-0 z-50 flex items-center justify-center p-4"
         style="display: none;">
        <div class="relative max-h-[90vh] max-w-6xl overflow-hidden rounded-xl bg-transparent p-2 md:p-4">
            <img x-on:click="toggleZoom"
                 src="{{ $image }}"
                 alt="{{ $alt }}"
                 class="h-full w-full cursor-zoom-out rounded-2xl object-contain" />
        </div>
    </div>
</div>
