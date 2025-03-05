<?php
use function Fluxtor\Converge\converge;
$clusters = converge()->getAllClusters();
?>

<nav class="converge-nav">
    {{ \Fluxtor\Converge\intercept(\Fluxtor\Converge\Enums\Interceptor::SIDEBAR_START, fn () => $groupItem) }}

    @if (filled($clusters))
        {{ \Fluxtor\Converge\intercept(\Fluxtor\Converge\Enums\Interceptor::BEFORE_SIDEBAR_CLUSTERS, fn () => $groupItem) }}
        <x-converge::clusters :$clusters />
        {{ \Fluxtor\Converge\intercept(\Fluxtor\Converge\Enums\Interceptor::AFTER_SIDEBAR_CLUSTERS, fn () => $groupItem) }}
    @endif

    {{ \Fluxtor\Converge\intercept(\Fluxtor\Converge\Enums\Interceptor::BEFORE_SIDEBAR_ITEMS, fn () => $groupItem) }}

    <x-converge::sidebar.items />

    {{ \Fluxtor\Converge\intercept(\Fluxtor\Converge\Enums\Interceptor::AFTER_SIDEBAR_ITEMS, fn () => $groupItem) }}

    {{ \Fluxtor\Converge\intercept(\Fluxtor\Converge\Enums\Interceptor::SIDEBAR_END, fn () => $groupItem) }}
</nav>
