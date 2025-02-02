<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Markdown\Extensions;

use Fluxtor\Converge\Markdown\Blocks\BladeComponentBlock;
use Fluxtor\Converge\Markdown\Parsers\BladeComponentBlockParser;
use Fluxtor\Converge\Markdown\Parsers\SelfClosingBladeComponentBlockParser;
use Fluxtor\Converge\Markdown\Renderers\BladeComponentRenderer;
use League\CommonMark\Environment\EnvironmentBuilderInterface;
use League\CommonMark\Extension\ExtensionInterface;

class BladeCompilerExtension implements ExtensionInterface
{
    public function register(EnvironmentBuilderInterface $environment): void
    {
        $environment->addBlockStartParser(BladeComponentBlockParser::createBlockStartParser(), 250);
        $environment->addBlockStartParser(SelfClosingBladeComponentBlockParser::createBlockStartParser(), 250);
        $environment->addRenderer(BladeComponentBlock::class, new BladeComponentRenderer());
    }
}
