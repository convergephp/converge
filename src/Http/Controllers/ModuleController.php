<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Http\Controllers;

use Illuminate\Contracts\View\View;

class ModuleController
{
    public function __invoke(): View
    {
        return view('converge::index');
    }
}
