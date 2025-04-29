<?php
use function Converge\converge;
$clusters = converge()->getAllClusters();
?>

<nav class="min:w-full px-2">
    {{ \Converge\intercept(\Converge\Enums\Interceptor::SIDEBAR_START, fn () => $groupItem) }}

    @if (filled($clusters))
        {{ \Converge\intercept(\Converge\Enums\Interceptor::BEFORE_SIDEBAR_CLUSTERS, fn () => $groupItem) }}
        <x-converge::clusters :$clusters />
        {{ \Converge\intercept(\Converge\Enums\Interceptor::AFTER_SIDEBAR_CLUSTERS, fn () => $groupItem) }}
    @endif

    {{ \Converge\intercept(\Converge\Enums\Interceptor::BEFORE_SIDEBAR_ITEMS, fn () => $groupItem) }}

    <x-converge::sidebar.items />

    {{ \Converge\intercept(\Converge\Enums\Interceptor::AFTER_SIDEBAR_ITEMS, fn () => $groupItem) }}

    {{ \Converge\intercept(\Converge\Enums\Interceptor::SIDEBAR_END, fn () => $groupItem) }}
</nav>
