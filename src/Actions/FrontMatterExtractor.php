<?php

declare(strict_types=1);

namespace Converge\Actions;

use Converge\Documents\Parser;

class FrontMatterExtractor
{
    public function handle(string $content): ?array
    {
        return Parser::make($content)->matter();
    }
}
