@php
    $clusters = app('converge')->getAllClusters();
@endphp
<nav class="relative pb-6 lg:text-sm lg:leading-6" id="nav">
    @if (filled($clusters))
        <x-converge::clusters :$clusters />
    @endif
    <x-converge::sidebar.items />
</nav>
