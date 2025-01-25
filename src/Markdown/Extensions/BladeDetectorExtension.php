<?php

namespace Fluxtor\Converge\Markdown\Extensions;

use Fluxtor\Converge\Markdown\Parsers\BladeComponentBlockParser;
use League\CommonMark\Extension\ExtensionInterface;
use League\CommonMark\Environment\EnvironmentBuilderInterface;

class BladeDetectorExtension implements ExtensionInterface
{
    public  function register(EnvironmentBuilderInterface $environment): void
    {
        $environment->addBlockStartParser(BladeComponentBlockParser::createBlockStartParser(),100);
        // dd($environment);
    }

}
