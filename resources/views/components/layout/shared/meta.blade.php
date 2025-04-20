@props(['metadata' => []])

@php
    use function Fluxtor\Converge\converge;
    $appName = config('app.name');
    $title = $metadata['title'] ?? $appName;
    $description = $metadata['description'] ?? 'Welcome to ' . $appName;
    $url = $metadata['url'] ?? url()->current();
    // $image = $metadata['image'] ?? converge()->getTheme()->getShareImage(); // e.g. OG image
@endphp

<meta charset="utf-8" />
<meta name="csrf-token" content="{{ csrf_token() }}" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
{{-- Font family link --}}
{{ converge()->getTheme()->getFontHtml() }}


{{-- Meta SEO --}}
<meta name="description" content="{{ $description }}" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="{{ $url }}" />

{{-- Favicon --}}
@if ($favicon = converge()->getTheme()->getFavicon())
    <link href="{{ $favicon }}" rel="icon" />
@endif

<title>
    {{ filled($metadata['title']) ? "{$metadata['title']} - {$appName}" : $appName }}
</title>
