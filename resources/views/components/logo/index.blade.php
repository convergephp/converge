@php
    $module = app('converge')->getActiveModule();
    $hasDarkMode = $module->hasDarkModeLogo();
@endphp

<div>
    {{-- Light mode logo --}}
    {!! $module->getLogoHtml(false) !!}

    {{-- Dark mode logo --}}
    @if ($hasDarkMode)
        {!! $module->getLogoHtml(true) !!}
    @endif
</div>
