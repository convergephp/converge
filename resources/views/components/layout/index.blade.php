@props([
    'livewire' => null,
])

<!DOCTYPE html>
<html
    lang="{{ str_replace('_', '-', app()->getLocale()) }}"
    {{-- dir="" --}}
    @class([
        'fi min-h-screen',
        'dark' => filament()->hasDarkModeForced(),
    ])
>
    <head>

        <meta charset="utf-8" />
        <meta name="csrf-token" content="{{ csrf_token() }}" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {{-- @if ($favicon = filament()->getFavicon())
            <link rel="icon" href="{{ $favicon }}" /> todo
        @endif --}}

        <title>
            {{-- {{ filled($title) ? "{$title} - " : null }} {{ $brandName }} todo --}}
        </title>


        <style>
            [x-cloak=''],
            [x-cloak='x-cloak'],
            [x-cloak='1'] {
                display: none !important;
            }

            @media (max-width: 1023px) {
                [x-cloak='-lg'] {
                    display: none !important;
                }
            }

            @media (min-width: 1024px) {
                [x-cloak='lg'] {
                    display: none !important;
                }
            }
        </style>

        {{-- {{ filament()->getTheme()->getHtml() }} --}}
        {{-- {{ filament()->getFontHtml() }} --}} 

        <style>
            :root {
                /* --font-family: '{!! filament()->getFontFamily() !!}'; todo */ 
                /* --sidebar-width: {{ filament()->getSidebarWidth() }}; todo */
                /* --collapsed-sidebar-width: {{ filament()->getCollapsedSidebarWidth() }}; todo */
                /* --default-theme-mode: {{ filament()->getDefaultThemeMode()->value }}; todo */
            }
        </style>

        @stack('styles')

        {{ \Filament\Support\Facades\FilamentView::renderHook(\Filament\View\PanelsRenderHook::STYLES_AFTER, scopes: $livewire->getRenderHookScopes()) }}

        {{-- @if (! filament()->hasDarkMode())
            <script>
                localStorage.setItem('theme', 'light')
            </script>
        @elseif (filament()->hasDarkModeForced())
            <script>
                localStorage.setItem('theme', 'dark')
            </script>
        @else --}}
            <script>
                const theme = localStorage.getItem('theme') ?? @js(filament()->getDefaultThemeMode()->value)

                if (
                    theme === 'dark' ||
                    (theme === 'system' &&
                        window.matchMedia('(prefers-color-scheme: dark)')
                            .matches)
                ) {
                    document.documentElement.classList.add('dark')
                }
            </script>
        {{-- @endif --}}
    </head>

    <body
        {{ $attributes
                ->class([
                    'converge-body',
                    'converge-panel-' . filament()->getId(),
                    'min-h-screen bg-gray-50 font-normal text-gray-950 antialiased dark:bg-gray-950 dark:text-white',
                ]) }}
    >
        {{ $slot }}
    </body>
</html>
