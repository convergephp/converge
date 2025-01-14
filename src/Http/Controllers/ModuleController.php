<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Http\Controllers;

use Fluxtor\Converge\Module;
use Fluxtor\Converge\ContentMap;
use Fluxtor\Converge\Converge;

class ModuleController
{
    function __invoke(Converge $converge)
    {
        dd(resolve('converge')->getActiveModule());
        // get the current active module grap it's settings applying them to UI 
        return view('converge::index');
    }
}
