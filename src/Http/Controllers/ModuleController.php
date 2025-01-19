<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Http\Controllers;

use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;

class ModuleController
{

    public function __invoke(Request $request): View
    {
        return view('converge::index');
    }
}
