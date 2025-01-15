<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Http\Controllers;

class ModuleController
{
    public function __invoke()
    {
        // dd($module);

        return view('converge::index');
    }
}
