@php
    $module = \Fluxtor\Converge\converge()->getActiveModule();
    $hasDarkMode = $module->hasDarkModeLogo();
@endphp
<div>
    {{-- Light mode logo --}}
    <span x-show="true">
        {!! $module->getLogoHtml(false) !!}
    </span>

    {{-- Dark mode logo --}}
    <span x-show="false">
        @if ($hasDarkMode)
            {!! $module->getLogoHtml(true) !!}
        @endif
    </span>
</div>
