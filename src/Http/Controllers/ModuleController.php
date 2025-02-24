<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Http\Controllers;

use Illuminate\Http\Request;
use Fluxtor\Converge\ContentMap;
use Fluxtor\Converge\Repository;
use Illuminate\Contracts\View\View;

use function Fluxtor\Converge\converge;

class ModuleController
{
    protected ContentMap $map;

    public function __construct(ContentMap $map)
    {
        $this->map = $map;
    }

    public function __invoke()
    {
        $repo = resolve(Repository::class);

        $module = $repo->getModule();

        $routeName = $repo->getActiveRouteName();

        if ($module->getId() === $repo->getActiveRouteName()) {
            if ($view = $module->getIndexView()) {
                return $view->render();
            }
        }

        return redirect()->to(route($routeName . '.show', [
            'url' => $this->map->getFirstFileUrl()
        ]));


        return  view('converge::index');
    }
}
