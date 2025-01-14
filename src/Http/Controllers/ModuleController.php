<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Http\Controllers;

use Fluxtor\Converge\Module;
use Fluxtor\Converge\Sidebar\SidebarManager;

class ModuleController
{
    public function __invoke()
    {
        $module = resolve('converge')->getActiveModule();
        // dd($module);


        return view('converge::index');
    }
}
