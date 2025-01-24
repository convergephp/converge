<?php

namespace Fluxtor\Converge\Markdown\Extensions;

use League\CommonMark\Node\Node;
use Illuminate\Support\Facades\Blade;
use League\CommonMark\Extension\ExtensionInterface;
use League\CommonMark\Renderer\NodeRendererInterface;
use League\CommonMark\Renderer\ChildNodeRendererInterface;
use League\CommonMark\Environment\EnvironmentBuilderInterface;
use League\CommonMark\Extension\CommonMark\Node\Block\FencedCode;
use League\CommonMark\Extension\CommonMark\Node\Block\IndentedCode;

class BladeParserExtension implements ExtensionInterface, NodeRendererInterface
{
    public function register(EnvironmentBuilderInterface $environment): void
    {
        $environment->addRenderer(FencedCode::class, $this, 100);
        $environment->addRenderer(IndentedCode::class, $this, 100);
    }

    public function render(Node $node, ChildNodeRendererInterface $childRenderer)

    {

        /** @var FencedCode|IndentedCode $node  */

        $info = $node->getInfoWords();

 

        // Look for our magic word

        if (in_array('+parse', $info)) {

            // Run the content through Blade

            return Blade::render($node->getLiteral());

        } 

    }
}
