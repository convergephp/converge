@php
    use function Converge\intercept;
@endphp
<div class="hidden min-w-[19rem] xl:block">
    <div class="text-base-content scrollbar-hidden sticky top-24 max-h-[calc(100vh-8rem)] w-[19rem] overflow-y-auto">
        <div class="flex flex-col">
            <x-converge::table-of-contents />
            {{-- Carbon ADS --}}
            @if (filled(intercept(\Converge\Enums\Interceptor::AFTER_TOC_CARBON_ADS)))
                <div class="rounded-box mt-auto overflow-hidden bg-transparent p-4">
                    {{ intercept(\Converge\Enums\Interceptor::AFTER_TOC_CARBON_ADS) }}
                </div>
            @endif
        </div>
    </div>
</div>
