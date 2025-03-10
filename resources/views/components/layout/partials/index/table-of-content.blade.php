@php
    use function Fluxtor\Converge\intercept;
@endphp
<div class="hidden min-w-[19rem] xl:block">
    <div class="text-base-content sticky top-24 max-h-[calc(100vh-8rem)] w-[19rem] overflow-y-auto">
        <x-converge::table-of-contents />
    </div>
    {{-- Carbon ADS --}}
    <div class="rounded-box overflow-hidden bg-transparent p-4">
        {{ intercept(\Fluxtor\Converge\Enums\Interceptor::AFTER_TOC_CARBON_ADS) }}
    </div>
</div>
