<?php
    use function Fluxtor\Converge\converge;
    $clusters = converge()->getAllClusters();
?>

<nav class="">
    @if (filled($clusters))
        <x-converge::clusters :$clusters />
    @endif
    <x-converge::sidebar.items />
</nav>
