<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Http\Controllers;

use Fluxtor\Converge\Module;
use Fluxtor\Converge\ContentMap;

class ModuleController
{
    function __invoke(Module $module)
    {
        dd($module);
        return view('converge::index');
    }
}
