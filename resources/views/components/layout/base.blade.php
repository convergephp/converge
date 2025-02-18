@use(Fluxtor\Converge\Facades\Converge)

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>

    <meta charset="utf-8" />
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    {{-- Favicon --}}
    @if ($favicon = app('converge')->getActiveModule()->getTheme()->getFavicon())
        <link rel="icon" href="{{ $favicon }}" />
    @endif

    {{-- Themes --}}
    {!! \Fluxtor\Converge\converge()->getActiveModule()->getTheme()->getFontHtml() !!}

    <title>
        {{-- {{ filled($title) ? "{$title} - " : null }} {{ $brandName }} todo --}}
    </title>

    <style>
        :root {
            --font: {{ \Fluxtor\Converge\converge()->getActiveModule()->getTheme()->getFontFamily() }}, "sans-serif";
        }

        {!! \Fluxtor\Converge\converge()->getTheme()->getDarkModeTheme() !!}
    </style>

    <style>
        [x-cloak] {}
    </style>

    <script>
        const theme = localStorage.getItem('theme')

        if (
            theme === 'dark' ||
            (theme === 'system' &&
                window.matchMedia('(prefers-color-scheme: dark)')
                .matches)
        ) {
            document.documentElement.classList.add('dark')
        }
    </script>

    {!! Converge::css() !!}
    {!! Converge::js() !!}

    {{ \Fluxtor\Converge\intercept(\Fluxtor\Converge\Enums\Interceptor::AFTER_SCRIPTS) }}
</head>

{{ \Fluxtor\Converge\intercept(\Fluxtor\Converge\Enums\Interceptor::AFTER_NAVBAR) }}

<body
    {{ $attributes->class([
        'converge-body',
        'font-display relative bg-base-200  lg:max-h-screen text-gray-950 antialiased  dark:text-white',
    ]) }}>

    {{-- BACKGROUND EFFETS --}}
    @include('converge::partials.background-effets')

    {{-- DYNAMIQUE CONTENT --}}
    {{ $slot }}
</body>

</html>
