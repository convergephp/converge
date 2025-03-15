@php
    $convert = new Fluxtor\Converge\Documents\Markdown();
@endphp
<div {{ $attributes }}
     class="[&_pre]:!mb-1 [&_pre]:!mt-1">
    {!! $convert->convert($slot) !!}
</div>
