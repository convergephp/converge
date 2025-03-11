@php
    use function Fluxtor\Converge\intercept;
@endphp
<div class="hidden min-w-[19rem] xl:block">
    <div class="text-base-content sticky top-24 max-h-[calc(100vh-8rem)] w-[19rem] overflow-y-auto">
        <div class="flex flex-col">
            <x-converge::table-of-contents />
            {{-- Carbon ADS --}}
            @if (filled(intercept(\Fluxtor\Converge\Enums\Interceptor::AFTER_TOC_CARBON_ADS)))
                <div class="rounded-box overflow-hidden bg-transparent p-4">
                    {{ intercept(\Fluxtor\Converge\Enums\Interceptor::AFTER_TOC_CARBON_ADS) }}
                </div>
            @endif
        </div>
    </div>
</div>
