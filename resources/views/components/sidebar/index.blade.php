@php
    $clusters = app('converge')->getAllClusters();
@endphp
<nav class="">
    @if (filled($clusters))
        <x-converge::clusters :$clusters />
    @endif
    <x-converge::sidebar.items />
</nav>
