<?php

namespace Fluxtor\Converge\Markdown\Renderers;

use Throwable;
use InvalidArgumentException;
use League\CommonMark\Node\Node;
use Illuminate\Support\Facades\Blade;
use League\CommonMark\Util\HtmlElement;
use League\CommonMark\Renderer\NodeRendererInterface;
use Fluxtor\Converge\Markdown\Blocks\BladeComponentBlock;
use League\CommonMark\Renderer\ChildNodeRendererInterface;

class BladeComponentRenderer implements NodeRendererInterface
{
    public function render(Node $node, ChildNodeRendererInterface $childContents): HtmlElement|null|string
    {
        if (!($node instanceof BladeComponentBlock)) {
            throw new InvalidArgumentException('Invalid block type.');
        }

        $bladeContent = $node->getLiteral();

        try {
            $renderedHtml = Blade::render($bladeContent);
        } catch (Throwable $e) {
            return "<pre>Error rendering Blade component: {$e->getMessage()}</pre>";
        }

        return new HtmlElement(
            tagName: 'div',
            attributes: ['class' => 'converge-component'],
            contents: $renderedHtml
        );
    }
}
