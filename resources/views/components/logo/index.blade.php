@php
    $module = \Converge\converge()->getActiveModule();
    $hasDarkMode = $module->hasDarkModeLogo();
@endphp
<div {{ $attributes }}>
    @if ($hasDarkMode)
        {{-- Light mode logo --}}
        <a href="/"
           x-show="$store.theme !== 'dark'"
           style="display: none;">
            {!! $module->getLogoHtml(false) !!}
        </a>

        {{-- Dark mode logo --}}
        <a href="/"
           x-show="$store.theme === 'dark'"
           style="display: none;">
            {!! $module->getLogoHtml(true) !!}
        </a>
    @else
        <a href="/">
            {!! $module->getLogoHtml(false) !!}
        </a>
    @endif
</div>
