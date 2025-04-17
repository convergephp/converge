<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Markdown\Extensions;

use Fluxtor\Converge\Markdown\Blocks\BladeComponentBlock;
use Fluxtor\Converge\Markdown\Parsers\BladeComponentBlockParser;
use Fluxtor\Converge\Markdown\Parsers\BladeComponentDirectiveBlockParser;
use Fluxtor\Converge\Markdown\Parsers\SelfClosingBladeComponentBlockParser;
use Fluxtor\Converge\Markdown\Renderers\BladeComponentRenderer;
use League\CommonMark\Environment\EnvironmentBuilderInterface;
use League\CommonMark\Extension\ExtensionInterface;

class BladeCompilerExtension implements ExtensionInterface
{
    public function register(EnvironmentBuilderInterface $environment): void
    {
        /**
         *  The usage of this style to inject blade components natively is postponed
         * to future versions since it seems buggy with
         * some of our Blade components. 
         */

        $environment->addBlockStartParser(BladeComponentDirectiveBlockParser::createBlockStartParser(), 100);
        $environment->addBlockStartParser(SelfClosingBladeComponentBlockParser::createBlockStartParser(), 90);
        $environment->addBlockStartParser(BladeComponentBlockParser::createBlockStartParser(), 90);

        $environment->addRenderer(BladeComponentBlock::class, new BladeComponentRenderer());
    }
}
