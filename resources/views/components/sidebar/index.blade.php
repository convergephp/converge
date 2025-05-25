<?php
use function Converge\converge;
$clusters = converge()->getAllClusters();
?>

<nav class="min:w-full px-2">
    {{ \Converge\intercept(\Converge\Enums\Interceptor::SIDEBAR_START) }}

    @if (filled($clusters))
        {{ \Converge\intercept(\Converge\Enums\Interceptor::BEFORE_SIDEBAR_CLUSTERS) }}
        <x-converge::clusters :$clusters />
        {{ \Converge\intercept(\Converge\Enums\Interceptor::AFTER_SIDEBAR_CLUSTERS) }}
    @endif

    {{ \Converge\intercept(\Converge\Enums\Interceptor::BEFORE_SIDEBAR_ITEMS) }}

    <x-converge::sidebar.items />

    {{ \Converge\intercept(\Converge\Enums\Interceptor::AFTER_SIDEBAR_ITEMS) }}

    {{ \Converge\intercept(\Converge\Enums\Interceptor::SIDEBAR_END) }}
</nav>
