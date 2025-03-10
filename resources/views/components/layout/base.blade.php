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
        {!! Converge::css() !!}
        {!! Converge::js() !!}
        {{ intercept(\Fluxtor\Converge\Enums\Interceptor::AFTER_SCRIPTS) }}
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
    </head>

    <body x-data="themeSwitcher({
        lightMode: {{ Illuminate\Support\Js::from(converge()->getTheme()->getLightModeTheme()) }},
        darkMode: {{ Illuminate\Support\Js::from(converge()->getTheme()->getDarkModeTheme()) }},
        highlightingDarkMode: {{ Illuminate\Support\Js::from(converge()->getTheme()->getDarkmodeHighlighterCss()) }},
        highlightingLightMode: {{ Illuminate\Support\Js::from(converge()->getTheme()->getLightmodeHighlighterCss()) }},
    })"
          {{ $attributes->class([
              'converge-body',
              'font-display relative bg-base-200 lg:max-h-screen text-gray-950 antialiased  dark:text-white',
          ]) }}>
        {{-- DYNAMIQUE CONTENT --}}
        {{ $slot }}
        <x-converge::search.modal />

        {{-- Carbon ADS --}}
        @if (filled(intercept(\Fluxtor\Converge\Enums\Interceptor::FIXED_CARBON_ADS)))
            <div
                 class="border-base-100 text-base-content bottom-10 right-4 z-50 m-4 max-w-sm rounded-lg border bg-white p-4 text-center text-sm font-normal shadow-lg lg:fixed lg:m-0 lg:max-w-[180px]">
                {{ intercept(\Fluxtor\Converge\Enums\Interceptor::FIXED_CARBON_ADS) }}
            </div>
        @endif
    </body>

</html>
