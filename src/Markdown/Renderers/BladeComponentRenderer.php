<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Markdown\Renderers;

use Fluxtor\Converge\Markdown\Blocks\BladeComponentBlock;
use Illuminate\Support\Facades\Blade;
use InvalidArgumentException;
use League\CommonMark\Node\Node;
use League\CommonMark\Renderer\ChildNodeRendererInterface;
use League\CommonMark\Renderer\NodeRendererInterface;
use League\CommonMark\Util\HtmlElement;
use Throwable;

class BladeComponentRenderer implements NodeRendererInterface
{
    public function render(Node $node, ChildNodeRendererInterface $childContents): HtmlElement|null|string
    {
        if (! ($node instanceof BladeComponentBlock)) {
            throw new InvalidArgumentException('Invalid block type.');
        }

        $bladeContent = $node->getLiteral();
        // dd($bladeContent);  

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
