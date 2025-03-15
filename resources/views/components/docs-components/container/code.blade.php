@php
    $convert = new Fluxtor\Converge\Documents\Markdown();
@endphp
<div data-name="frame"
     {{ $attributes->merge(['class' => 'not-prose text-sm bg-base-300/20 leading-8 relative overflow-hidden rounded-lg border-2 border-gray-400/10  p-1 [&_pre]:!mb-0 [&_pre]:!mt-0 [&_pre]:!rounded-lg [&_pre]:!py-2 [&_pre]:!px-4 [&_pre]:!overflow-auto [&_pre]:!ring [&_pre]:!ring-gray-400/20']) }}>
    <div style="background-position: 10px 10px;"
         class="bg-grid-neutral-200/20 dark:bg-grid-white/5 absolute inset-0 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]">
    </div>
    {!! $convert->convert($slot) !!}
    <div class="pointer-events-none absolute inset-0 rounded-lg"></div>
</div>
