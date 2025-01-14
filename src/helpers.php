<?php

namespace Fluxtor\Converge;


if (! function_exists('converge')) {
    // /** @return \Fluxtor\Converge\Converge */
    function converge()
    {
        return app(Converge::class);
    }
}
