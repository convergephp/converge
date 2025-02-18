<?php

declare(strict_types=1);

namespace Fluxtor\Converge\FontProviders;

use Fluxtor\Converge\FontProviders\Contracts\FontProvider;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Support\HtmlString;

class GoogleFontProvider implements FontProvider
{
    public function getHtml(string $family, ?string $url = null): Htmlable
    {
        $family = str_replace(' ', '+', $family);
        $url ??= "https://fonts.googleapis.com/css2?family={$family}:wght@400;500;600;700;800;900&display=swap";

        return new HtmlString("
            <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">
            <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>
            <link href=\"{$url}\" rel=\"stylesheet\" />
        ");
    }
}
