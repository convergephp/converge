<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

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
    {{-- @endif --}}
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body
    {{ $attributes->class([
        'converge-body',
        'min-h-screen bg-gray-50 font-normal text-gray-950 antialiased dark:bg-gray-950 dark:text-white',
    ]) }}>
    {{ $slot }}
</body>

</html>
