<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Actions;

use Fluxtor\Converge\Documents\Parser;

class FrontMatterExtractor
{
    public function handle(string $content): ?array
    {
        return Parser::make($content)->matter();
    }
}
