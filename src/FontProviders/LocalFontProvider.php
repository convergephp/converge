<?php

use Fluxtor\Converge\FontProviders\Contracts\FontProvider;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Support\HtmlString;

class LocalFontProvider implements FontProvider
{
    public function getHtml(string $family, ?string $url = null): Htmlable
    {
        if (blank($url)) {
            return new HtmlString('');
        }

        return new HtmlString("
            <link href=\"{$url}\" rel=\"stylesheet\" />
        ");
    }
}
