@php
    use function Converge\intercept;
    $module = \Converge\converge()->getActiveModule();
    $hasDarkMode = $module->hasDarkModeLogo();
@endphp

<div {{ $attributes->merge(['class' => 'flex items-center']) }}>

    <div>
        {{ intercept(\Converge\Enums\Interceptor::BEFORE_LOGO) }}
    </div>

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

    <div>
        {{ intercept(\Converge\Enums\Interceptor::AFTER_LOGO) }}
    </div>

</div>
