<div data-name="frame"
     class="not-prose relative mb-4 overflow-hidden rounded-2xl bg-gray-50/50 p-2 dark:bg-gray-800/25">
    <div style="background-position: 10px 10px;"
         class="bg-grid-neutral-200/20 dark:bg-grid-white/5 absolute inset-0 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]">
    </div>
    {{ $slot }}
    <div class="pointer-events-none absolute inset-0 rounded-2xl border border-black/5 dark:border-white/5"></div>
</div>
