@use(Fluxtor\Converge\Facades\Converge)

<?php
use function Fluxtor\Converge\converge;
use function Fluxtor\Converge\intercept;
?>

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

    <head>

        <meta charset="utf-8" />
        <meta name="csrf-token"
              content="{{ csrf_token() }}" />
        <meta name="viewport"
              content="width=device-width, initial-scale=1" />
        {{-- Font family link --}}
        {{ converge()->getTheme()->getFontHtml() }}

        {{-- Favicon --}}
        @if ($favicon = converge()->getTheme()->getFavicon())
            <link href="{{ $favicon }}"
                  rel="icon" />
        @endif

        <title>
            {{-- {{ filled($title) ? "{$title} - " : null }} {{ $brandName }} todo --}}
        </title>

        <style>
            :root {
                --font: {{ converge()->getTheme()->getFontFamily() }};
            }
        </style>

        <style>
            [x-cloak] {
                display: none;
            }
        </style>
        {!! Converge::css() !!}

        {{ intercept(\Fluxtor\Converge\Enums\Interceptor::AFTER_SCRIPTS) }}
    </head>
    
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            const sidebar = document.querySelector("#sidebar");

            if (sidebar) {
                const savedScroll = sessionStorage.getItem("sidebarScroll");
                if (savedScroll !== null) {
                    sidebar.scrollTop = parseInt(savedScroll, 10);
                }

                window.addEventListener("beforeunload", function() {
                    sessionStorage.setItem("sidebarScroll", sidebar.scrollTop);
                });
            }
        });
    </script>

    {{ intercept(\Fluxtor\Converge\Enums\Interceptor::AFTER_NAVBAR) }}

    <body 
        x-data="themeSwitcher({
            lightMode: {{ Illuminate\Support\Js::from(converge()->getTheme()->getLightModeTheme()) }},
            darkMode: {{ Illuminate\Support\Js::from(converge()->getTheme()->getDarkModeTheme()) }},
            highlightingDarkMode: {{ Illuminate\Support\Js::from(converge()->getTheme()->getDarkmodeHighlighterCss()) }},
            highlightingLightMode: {{ Illuminate\Support\Js::from(converge()->getTheme()->getLightmodeHighlighterCss()) }},
        })"
        {{ $attributes->class([
            'converge-body',
            'font-display relative bg-base-200 lg:max-h-screen text-gray-950 antialiased  dark:text-white',
    ]) }}
    >
    {{-- DYNAMIQUE CONTENT --}}
        {{ $slot }}
        <x-converge::search.modal/>
        {!! Converge::js() !!}
    </body>

</html>
