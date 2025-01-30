<?php

namespace Fluxtor\Converge\Markdown\Extensions;

use League\CommonMark\Extension\ExtensionInterface;
use Fluxtor\Converge\Markdown\Blocks\BladeComponentBlock;
use League\CommonMark\Environment\EnvironmentBuilderInterface;
use Fluxtor\Converge\Markdown\Renderers\BladeComponentRenderer;
use Fluxtor\Converge\Markdown\Parsers\BladeComponentBlockParser;
use Fluxtor\Converge\Markdown\Parsers\SelfClosingBladeComponentBlockParser;
use Fluxtor\Converge\Markdown\Parsers\SelfClosingInOneLineBladeComponentBlockParser;

class BladeDetectorExtension implements ExtensionInterface
{
    public  function register(EnvironmentBuilderInterface $environment): void
    {
        $environment->addBlockStartParser(BladeComponentBlockParser::createBlockStartParser(), 250);
        $environment->addBlockStartParser(SelfClosingBladeComponentBlockParser::createBlockStartParser(), 250);
        $environment->addRenderer(BladeComponentBlock::class, new BladeComponentRenderer());
    }
}
