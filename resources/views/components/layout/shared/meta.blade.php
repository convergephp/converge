@php
    use function Fluxtor\Converge\converge;
    $metadata = converge()->getMetaTags();
    $title = $metadata->getTitle();
    $meta = $metadata->getMetadata();
    $openGraphs = $metadata->getOpenGraphs();
    $twitterCards = $metadata->getTwitterCards();
    $customTags = $metadata->getCustomTags();
@endphp

<meta charset="utf-8" />
<meta name="csrf-token" content="{{ csrf_token() }}" />
<meta name="viewport" content="width=device-width, initial-scale=1" />

{{ converge()->getTheme()->getFontHtml() }}

@if ($favicon = converge()->getTheme()->getFavicon())
    <link href="{{ $favicon }}" rel="icon" />
@endif

<link href="{{ url()->current() }}" rel="canonical" />

<title>
    {{ $title }}
</title>

@foreach ($openGraphs as $key => $og)
    <meta property="{{ $key }}" content="{{ $og }}" />
@endforeach

@foreach ($twitterCards as $key => $card)
    <meta name="{{ $key }}" content="{{ $card }}" />
@endforeach

@foreach ($customTags as $tag)
    {!! $tag !!}
@endforeach
