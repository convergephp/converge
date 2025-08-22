<?php

namespace Converge\Routing\UrlBuilders\Contracts;

use Converge\Routing\Context\ContextCollection;

interface UrlBuilder
{
    public function build(string $baseUri, ContextCollection $contexts): string;
}