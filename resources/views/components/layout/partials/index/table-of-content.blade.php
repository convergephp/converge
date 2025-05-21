@php
    use function Converge\intercept;
@endphp
<div class="hidden min-w-[19rem] xl:block">
    <div class="text-base-content scrollbar-hidden sticky top-24 max-h-[calc(100vh-8rem)] w-[19rem] overflow-y-auto">
        <div class="flex flex-col">
            <x-converge::table-of-contents />
            {{-- Carbon ADS --}}
            @if (filled(intercept(\Converge\Enums\Interceptor::AFTER_TOC_CARBON_ADS)))
                <div class="rounded-box mt-auto overflow-hidden bg-transparent px-[1.6rem] py-[1rem]">
                    <div class="rounded-box bg-white">
                        {{ intercept(\Converge\Enums\Interceptor::AFTER_TOC_CARBON_ADS) }}
                    </div>
                </div>
            @endif
        </div>
    </div>
</div>
