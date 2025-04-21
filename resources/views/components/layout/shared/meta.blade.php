@props(['metadata' => []])

@php
    use function Fluxtor\Converge\converge;
    $metadata = converge()->getMetadata();
    $appName = config('app.name');
    $title = $metadata['title'] ;
    $description = $metadata['description'] ?? 'Welcome to ' . $appName;
    $url = $metadata['url'] ?? url()->current();
    // $image = $metadata['image'] ?? converge()->getTheme()->getShareImage(); // e.g. OG image
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

@dd(converge()->getMetadata()->getOpenGraphs())
{{-- Meta SEO --}}
<meta name="description" content="{{ $description }}" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="{{ $url }}" />

<!-- open graph -->
<meta property="og:type" content="article" />
<meta property="og:title" content="{{ $metadata['title'] }}" />
<meta property="og:description" content="{{ $metadata['description'] }}" />
<meta property="og:url" content="{{ $metadata['url'] }}" />
<meta property="og:image" content="{{ $metadata['image'] }}" />

<!-- twitter cards --> 

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="{{ $metadata['title'] }}" />
<meta name="twitter:description" content="{{ $metadata['description'] }}" />
<meta name="twitter:image" content="{{ $metadata['image'] }}" />
