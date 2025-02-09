@php
    $clusters = app('converge')->getAllClusters();
@endphp
{{-- <div
    class="aside-dashboard fixed inset-0 left-[max(0px,calc(50%-40rem))] right-auto top-[3.8125rem] hidden w-[18rem] overflow-y-auto pb-10 pl-8 pr-4 lg:block"> --}}
<nav class="relative pb-6 lg:text-sm lg:leading-6" id="nav">
    @if (filled($clusters))
        <x-converge::clusters :$clusters />
    @endif
    <x-converge::sidebar.items />
</nav>
