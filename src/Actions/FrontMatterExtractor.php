<?php

namespace Fluxtor\Converge\Actions;

use Fluxtor\Converge\Contracts\Action;
use Fluxtor\Converge\Documents\Parser;

class FrontMatterExtractor
{
    public function handle(string $content): array|null
    {
        return Parser::make($content)->matter();
    }
}
