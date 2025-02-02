<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Markdown\Extensions;

use Illuminate\Support\Facades\Blade;
use League\CommonMark\Environment\EnvironmentBuilderInterface;
use League\CommonMark\Extension\CommonMark\Node\Block\FencedCode;
use League\CommonMark\Extension\CommonMark\Node\Block\IndentedCode;
use League\CommonMark\Extension\ExtensionInterface;
use League\CommonMark\Node\Node;
use League\CommonMark\Renderer\ChildNodeRendererInterface;
use League\CommonMark\Renderer\NodeRendererInterface;

class BladeParserExtension implements ExtensionInterface, NodeRendererInterface
{
    public function register(EnvironmentBuilderInterface $environment): void
    {
        $environment->addRenderer(FencedCode::class, $this, 100);
        $environment->addRenderer(IndentedCode::class, $this, 100);
    }

    public function render(Node $node, ChildNodeRendererInterface $childRenderer)
    {

        /** @var FencedCode|IndentedCode $node */
        $info = $node->getInfoWords();


        if (in_array('+compile', $info)) {
            return Blade::render($node->getLiteral());
        }
    }
}
