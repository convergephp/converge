<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Http\Controllers;

use Fluxtor\Converge\Module;

class ModuleController
{
    public function __invoke()
    {
        $module = resolve('converge')->getActiveModule();
        dd($module);

        // get the current active module grap it's settings applying them to UI
        return view('converge::index', [
            'sidebarItems' => '',
        ]);
    }
}
