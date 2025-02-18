<?php

declare(strict_types=1);

namespace Fluxtor\Converge\FontProviders\Contracts;

use Illuminate\Contracts\Support\Htmlable;

interface FontProvider
{
    public function getHtml(string $family, ?string $url = null): Htmlable;
}
