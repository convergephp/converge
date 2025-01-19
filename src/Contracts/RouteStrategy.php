<?php

namespace Fluxtor\Converge\Contracts;

interface RouteStrategy
{
    public function generateRoutes($module): void;
}
