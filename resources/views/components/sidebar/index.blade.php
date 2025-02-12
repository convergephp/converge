<?php
    $clusters = app('converge')->getAllClusters();
    // dd(app('converge')->getRawRoutePath());
    
?>

<nav class="">
    @if (filled($clusters))
        <x-converge::clusters :$clusters />
    @endif
    <x-converge::sidebar.items />
</nav>
