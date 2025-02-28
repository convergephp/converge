@php
    $module = \Fluxtor\Converge\converge()->getActiveModule();
    $hasDarkMode = $module->hasDarkModeLogo();
@endphp

<div>
    {{-- Light mode logo --}}
    <span x-show="">
        {!! $module->getLogoHtml(false) !!}
    </span>

    {{-- Dark mode logo --}}
    <span x-show="">
        @if ($hasDarkMode)
        {!! $module->getLogoHtml(true) !!}
        @endif
    </span>
</div>
