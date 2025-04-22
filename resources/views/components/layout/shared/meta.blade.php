@php
    use function Fluxtor\Converge\converge;
    $metadata = converge()->getMetadata();
    $title = $metadata->getTitle();
    $meta = $metadata->getMetadata();
    $openGraphs = $metadata->getOpenGraphs();
    $twitterCards = $metadata->getTwitterCards();
    $customTags = $metadata->getCustomTags();
@endphp

<meta charset="utf-8" />
<meta name="csrf-token" content="{{ csrf_token() }}" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
{{-- Font family link --}}
{{ converge()->getTheme()->getFontHtml() }}


@if ($favicon = converge()->getTheme()->getFavicon())
    <link href="{{ $favicon }}" rel="icon" />
@endif

<link href="{{ url()->current() }}" rel="canonical" />

<title>
    {{ $title }}
</title>

@foreach ($openGraphs as $property => $ogContent)
    <meta property="{{ $property }}" content="{{ $ogContent }}" />
@endforeach

@foreach ($twitterCards as $name => $content)
    <meta name="{{ $name }}" content="{{ $content }}" />
@endforeach

@foreach ($customTags as $tag)
    {!! $tag !!}
@endforeach

<meta name="description" content="{{ $description }}" />
<meta name="robots" content="index, follow" />

<!-- twitter cards -->
{{-- 
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="{{ $metadata['title'] }}" />
<meta name="twitter:description" content="{{ $metadata['description'] }}" />
<meta name="twitter:image" content="{{ $metadata['image'] }}" /> --}}
