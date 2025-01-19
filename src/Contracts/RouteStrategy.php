<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Contracts;

interface RouteStrategy
{
    public function generateRoutes($module): void;
}
