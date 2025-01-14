<?php

declare(strict_types=1);

namespace Fluxtor\Converge;

if (! function_exists('converge')) {
    // /** @return \Fluxtor\Converge\Converge */
    function converge()
    {
        return app(Converge::class);
    }
}
