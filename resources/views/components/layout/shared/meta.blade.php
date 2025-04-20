@props(['metadata' => []])

@php
    use function Fluxtor\Converge\converge;
    $appName = config('app.name');
@endphp

<meta charset="utf-8" />
<meta name="csrf-token" content="{{ csrf_token() }}" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
{{-- Font family link --}}
{{ converge()->getTheme()->getFontHtml() }}

{{-- Favicon --}}
@if ($favicon = converge()->getTheme()->getFavicon())
    <link href="{{ $favicon }}" rel="icon" />
@endif

<title>
    {{ filled($metadata['title']) ? "{$metadata['title']} - {$appName}" : $appName }}
</title>
