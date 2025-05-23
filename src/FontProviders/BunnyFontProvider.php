<?php

declare(strict_types=1);

namespace Converge\FontProviders;

use Converge\FontProviders\Contracts\FontProvider;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Support\HtmlString;

class BunnyFontProvider implements FontProvider
{
    public function getHtml(string $family, ?string $url = null): Htmlable
    {
        $family = (string) str($family)->replace(' ', '-')->lower()->kebab();
        $url ??= "https://fonts.bunny.net/css?family={$family}:400,500,600,700,800,900&display=swap";

        return new HtmlString("
            <link rel=\"preconnect\" href=\"https://fonts.bunny.net\">
            <link href=\"{$url}\" rel=\"stylesheet\" />
        ");
    }
}
