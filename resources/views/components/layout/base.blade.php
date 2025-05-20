@props([
    'metadata' => [],
])

@use(Converge\Facades\Converge)

<?php
use function Converge\converge;
use function Converge\intercept;
?>

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <x-converge::layout.shared.meta :$metadata />

    <head>
        {{-- fontfamily links --}}
        {!! converge()->getTheme()->getFontHtml() !!}

        {{-- Components build assets --}}
        @if (file_exists(public_path('vendor/converge/components/css/components.css')))
            <link rel="stylesheet"
                  href="{{ asset('vendor/converge/components/css/components.css') }}">
        @endif

        {!! Converge::css() !!}

        {{ intercept(\Converge\Enums\Interceptor::AFTER_SCRIPTS) }}
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

        {{ intercept(\Converge\Enums\Interceptor::AFTER_NAVBAR) }}
        <script>
            // hack to prevent light flicker at load time in slow connections (chrome)
            (function() {
                let theme = localStorage.getItem('theme') ?? 'dark';

                if (theme === 'system') {
                    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ?
                        'dark' :
                        'light';
                }

                if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                } else {
                    document.documentElement.classList.remove('dark');
                }

                const root = document.documentElement;
                const themes = {
                    light: {!! converge()->getTheme()->getLightModeTheme() !!},
                    dark: {!! converge()->getTheme()->getDarkModeTheme() !!}
                };

                const selectedTheme = themes[theme];
                if (selectedTheme) {
                    Object.entries(selectedTheme).forEach(([key, value]) => {
                        root.style.setProperty(key, value);
                    });
                }

                if (!localStorage.getItem('theme')) {
                    localStorage.setItem('theme', 'dark');
                }
            })();
        </script>
    </head>

    <body x-data="themeSwitcher({
        lightMode: {{ Illuminate\Support\Js::from(converge()->getTheme()->getLightModeTheme()) }},
        darkMode: {{ Illuminate\Support\Js::from(converge()->getTheme()->getDarkModeTheme()) }},
        highlightingDarkMode: {{ Illuminate\Support\Js::from(converge()->getTheme()->getDarkmodeHighlighterCss()) }},
        highlightingLightMode: {{ Illuminate\Support\Js::from(converge()->getTheme()->getLightmodeHighlighterCss()) }},
    })"
          {{ $attributes->class([
              'converge-body',
              'font-display scrollbar-hidden relative bg-base-200 lg:max-h-screen text-gray-950 antialiased  font-normal dark:text-white',
          ]) }}>
        {{-- DYNAMIQUE CONTENT --}}
        {{ $slot }}
        <x-converge::search.modal />

        <!-- Bouton retour en haut -->
        <button x-data="scrollButton()"
                @scroll.window="handleScroll"
                @click="scrollToTop"
                x-show="showButton"
                x-transition:enter="transition ease-out duration-300"
                x-transition:enter-start="opacity-0 transform translate-y-4"
                x-transition:enter-end="opacity-100 transform translate-y-0"
                x-transition:leave="transition ease-in duration-300"
                x-transition:leave-start="opacity-100 transform translate-y-0"
                x-transition:leave-end="opacity-0 transform translate-y-4"
                class="btn btn-rounded bg-primary btn-circle fixed bottom-16 right-8 border-none text-white lg:bottom-20">
            <svg class="h-6 w-6"
                 fill="none"
                 stroke="currentColor"
                 viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
            </svg>
        </button>

        <script>
            function scrollButton() {
                return {
                    showButton: false,
                    lastScrollY: 0,

                    handleScroll() {
                        const currentScrollY = window.scrollY;
                        if (currentScrollY > 300) {
                            this.showButton = true;
                        } else {
                            this.showButton = false;
                        }

                        // Mettre à jour la dernière position connue pour la comparaison suivante
                        this.lastScrollY = currentScrollY;
                    },

                    scrollToTop() {
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                    }
                };
            }
        </script>

        {!! Converge::js() !!}

        {{-- Carbon ADS --}}
        @if (filled(intercept(\Converge\Enums\Interceptor::FIXED_CARBON_ADS)))
            <div class="border-base-100 text-base-content bottom-10 right-10 z-50 m-4 max-w-sm rounded-lg border bg-white p-4 text-center text-sm font-normal shadow-lg lg:fixed lg:m-0 lg:max-w-[200px]"
                 style="font-weight: var(--font-weight)">
                {{ intercept(\Converge\Enums\Interceptor::FIXED_CARBON_ADS) }}
            </div>
        @endif

    </body>

</html>
