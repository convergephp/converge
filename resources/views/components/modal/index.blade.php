@props([
    'header' => null,
    'footer' => null,
    'trigger' => null,
    'height' => 75,
    'scrollable' => true,
    'closeEvent' => null,
    'closeEventCallback' => null,
    'openEvent' => null,
])

@php
    $maxHeight = $height - 5;
@endphp

<div x-data="{
    isOpen: false,
    startY: 0,
    closeEventCallback: {{ Js::from($closeEventCallback) }},
    currentY: 0,
    moving: false,

    init() {
        this.$nextTick(() => {
            Alpine.effect(() => {
                if (this.$refs.panel) {
                    this.$refs.panel.style.transform = `translateY(${this.distance}px)`;
                }
            });
        })
    },

    open() {
        this.isOpen = true;
    },

    close() {
        this.isOpen = false;
        this.resetPosition();
    },

    get distance() {
        return this.moving ? Math.max(0, this.currentY - this.startY) : 0;
    },

    resetPosition() {
        this.startY = 0;
        this.currentY = 0;
        if (this.$refs.panel) {
            this.$refs.panel.style.transform = `translateY(0)`;
        }
    },

    handleMovingStart(event) {
        this.moving = true;
        this.startY = this.currentY = event.touches[0].clientY;
    },

    handleWhileMoving(event) {
        this.currentY = event.touches[0].clientY;
    },

    handleMovingEnd() {
        if (this.distance > 100) {
            this.close();
        }
        this.moving = false;
    },
}"
     @if (filled($closeEvent))
    x-on:{{ $closeEvent }}.window="close()"
    @endif
    @if (filled($openEvent))
        x-on:{{ $openEvent }}.window="open()"
    @endif
    {{ $attributes->merge(['class' => 'flex justify-center']) }}
    >
    <!-- Trigger Button/Element -->
    @if (filled($trigger))
        @php
            $tag = $trigger->attributes->has('isButton') ? 'button' : 'div';
            $atts = $trigger->attributes->has('isButton') ? 'type="button"' : '';
        @endphp
        <{{ $tag }} x-on:click="open()"
                             {{ $atts }}
                             {{ $trigger->attributes->except('isButton') }}>
            {{ $trigger }}
            </{{ $tag }}>
    @endif

    <!-- Modal Container -->
    <div x-show="isOpen"
         style="display: none"
         x-on:keydown.escape.prevent.stop="close()"
         role="dialog"
         aria-modal="true"
         x-id="['modal-header']"
         :aria-labelledby="$id('modal-header')"
         class="fixed inset-x-0 inset-y-0 z-40 overflow-y-auto">
        <!-- Backdrop Overlay -->
        <div x-show="isOpen"
             x-transition:enter="transition ease-out duration-300"
             x-transition:enter-start="opacity-0"
             x-transition:enter-end="opacity-100"
             x-transition:leave="transition ease-in duration-200"
             x-transition:leave-start="opacity-100"
             x-transition:leave-end="opacity-0"
             class="bg-base-200/70 fixed inset-0 shadow-inner backdrop-blur-md backdrop-saturate-150"></div>

        <!-- Modal Panel -->
        <div x-show="isOpen"
             x-transition
             x-ref="panel"
             x-on:click="close()"
             @class([
                 'relative z-30 flex min-h-screen items-center justify-center',
                 'overflow-hidden' => $scrollable,
                 'overflow-auto' => !$scrollable,
             ])>
            <div style="height: {{ $height }}vh"
                 class="w-full">
                <!-- Close Button -->
                {{-- <div class="relative mx-auto max-w-2xl py-1 text-end">
                    <button type="button"
                            class="btn btn-circle absolute -top-6 z-50 border-none"
                            x-on:click.stop="close()">
                        <svg class="text-base-content h-5 w-5"
                             viewBox="0 0 20 20">
                            <path d="M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z"
                                  stroke="currentColor"
                                  fill="none"
                                  fill-rule="evenodd"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"></path>
                        </svg>
                    </button>
                </div> --}}

                <!-- Modal Content -->
                <div x-on:click.stop
                     x-trap.noscroll.inert="isOpen"
                     @class([
                         'relative mx-auto max-w-2xl overflow-auto rounded-box border border-base-300 bg-base-200 text-base-content',
                         'pb-4' => blank($footer),
                         'pb-2' => filled($footer),
                         'pt-4' => blank($header),
                         'pt-0' => filled($header),
                     ])>
                    <!-- Header Section -->
                    <div class="flex flex-row-reverse items-center justify-start">
                        <!-- Mobile Swipe Handle -->
                        <div x-on:touchstart="handleMovingStart($event)"
                             x-on:touchmove="handleWhileMoving($event)"
                             x-on:touchend="handleMovingEnd()"
                             class="absolute left-0 right-0 top-[-10px] h-[50px] sm:hidden">
                            <div class="flex justify-center pt-[12px]">
                                <div class="bg-base-300 h-[5px] w-[10%] rounded-box "></div>
                            </div>
                        </div>

                        <!-- Header Content -->
                        @if (filled($header))
                            <div {{ $header->attributes->merge(['class' => 'modal-header flex-grow border-b border-base-300 px-2']) }}
                                 x-bind:id="$id('modal-header')">
                                {{ $header }}
                            </div>
                        @endif
                    </div>

                    <!-- Main Content Area -->
                    <div class="h-full w-full overflow-y-auto px-4"
                         style="max-height: {{ $scrollable ? $maxHeight . 'vh' : 'none' }}">
                        {{ $slot }}
                    </div>

                    <!-- Footer Section -->
                    @if (filled($footer))
                        <footer @class([
                            'relative z-30 mt-4 hidden w-full select-none items-center text-center sm:flex',
                        ])>
                            {{ $footer }}
                        </footer>
                    @endif
                </div>
            </div>
        </div>
    </div>
</div>
