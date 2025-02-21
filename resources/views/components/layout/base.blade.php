@use(Fluxtor\Converge\Facades\Converge)

<?php
use function Fluxtor\Converge\converge;
use function Fluxtor\Converge\intercept;
?>

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>

    <meta charset="utf-8" />
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    {{-- Favicon --}}
    @if ($favicon = converge()->getTheme()->getFavicon())
        <link href="{{ $favicon }}" rel="icon" />
    @endif

    <title>
        {{-- {{ filled($title) ? "{$title} - " : null }} {{ $brandName }} todo --}}
    </title>
    <style>
        :root {
            --font: {{ converge()->getTheme()->getFontFamily() }}, "sans-serif";
        }
    </style>

    <style>
        [x-cloak] {}
    </style>
    {!! Converge::css() !!}
    {!! Converge::js() !!}

    {{ intercept(\Fluxtor\Converge\Enums\Interceptor::AFTER_SCRIPTS) }}
</head>

{{ intercept(\Fluxtor\Converge\Enums\Interceptor::AFTER_NAVBAR) }}

<body x-data="themeSwitcher({
    lightMode: {{ Illuminate\Support\Js::from(converge()->getTheme()->getLightModeTheme()) }},
    darkMode: {{ Illuminate\Support\Js::from(converge()->getTheme()->getDarkModeTheme()) }},
})"
    {{ $attributes->class([
        'converge-body',
        'font-display relative bg-base-200  lg:max-h-screen text-gray-950 antialiased  dark:text-white',
    ]) }}>
    {{-- DYNAMIQUE CONTENT --}}
    {{ $slot }}
</body>

</html>
