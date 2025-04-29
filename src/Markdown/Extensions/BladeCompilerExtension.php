<?php

declare(strict_types=1);

namespace Converge\Markdown\Extensions;

use Converge\Markdown\Blocks\BladeComponentBlock;
use Converge\Markdown\Parsers\BladeComponentBlockParser;
use Converge\Markdown\Parsers\BladeComponentDirectiveBlockParser;
use Converge\Markdown\Parsers\SelfClosingBladeComponentBlockParser;
use Converge\Markdown\Renderers\BladeComponentRenderer;
use League\CommonMark\Environment\EnvironmentBuilderInterface;
use League\CommonMark\Extension\ExtensionInterface;

class BladeCompilerExtension implements ExtensionInterface
{
    public function register(EnvironmentBuilderInterface $environment): void
    {
        /**
         * The usage of this style to inject blade components natively is postponed
         * to future versions since it seems buggy with
         * some of our Blade components.
         */
        $environment->addBlockStartParser(BladeComponentDirectiveBlockParser::createBlockStartParser(), 200);
        $environment->addBlockStartParser(BladeComponentBlockParser::createBlockStartParser(), 190);
        $environment->addBlockStartParser(SelfClosingBladeComponentBlockParser::createBlockStartParser(), 90);

        // adding the render that render any cuptured blade block (by the tree parser)
        $environment->addRenderer(BladeComponentBlock::class, new BladeComponentRenderer());
    }
}
