<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Markdown\Extensions;

use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Str;
use League\CommonMark\Environment\Environment;
use League\CommonMark\Environment\EnvironmentBuilderInterface;
use League\CommonMark\Event\DocumentParsedEvent;
use League\CommonMark\Event\DocumentRenderedEvent;
use League\CommonMark\Extension\CommonMark\Node\Block\FencedCode;
use League\CommonMark\Extension\CommonMark\Node\Block\HtmlBlock;
use League\CommonMark\Extension\CommonMark\Node\Block\IndentedCode;
use League\CommonMark\Extension\CommonMark\Node\Inline\Code;
use League\CommonMark\Extension\ExtensionInterface;
use League\CommonMark\Output\RenderedContent;
use League\CommonMark\Renderer\HtmlRenderer;

class BladeCompilerExtension implements ExtensionInterface
{
    protected Environment $environment;

    protected array $rendered = [];

    public function register(EnvironmentBuilderInterface $environment): void
    {
        $environment->addEventListener(
            DocumentParsedEvent::class,
            [$this, 'onDocumentParsed'],
            -10
        );

        $environment->addEventListener(
            DocumentRenderedEvent::class,
            [$this, 'onDocumentRendered'],
            10
        );

        $this->environment = $environment;
    }

    public function onDocumentParsed(DocumentParsedEvent $event)
    {
        // dd($event);

        foreach ($event->getDocument()->iterator() as $node) {
            if (! $this->isCodeNode($node)) {
                // dump($node);

                continue;
            }

            // Create a unique, random ID

            $id = Str::uuid()->toString();

            // Create a new HTML block that just has our placeholder

            $replacement = new HtmlBlock(HtmlBlock::TYPE_6_BLOCK_ELEMENT);

            $replacement->setLiteral("[[replace:$id]]");

            // Replace the code node with our placeholder

            $node->replaceWith($replacement);

            dump($node);

            // Create an identical renderer to the main one

            $renderer = new HtmlRenderer($this->environment);

            // Render the code node and stash it away.

            $this->rendered[$id] = $renderer->renderNodes([$node]);
        }
    }

    public function onDocumentRendered(DocumentRenderedEvent $event)
    {

        $search = [];

        $replace = [];

        // Gather up all the placeholders and their real content

        foreach ($this->rendered as $id => $content) {

            $search[] = "<p>[[replace:$id]]</p>";
            $search[] = "[[replace:$id]]";

            $replace[] = $content;
        }

        // The HTML that Commonmark generated

        $content = $event->getOutput()->getContent();

        // First render the output without code blocks.

        $content = Blade::render($content);

        // Then add the code blocks back in.

        $content = Str::replace($search, $replace, $content);

        // And replace the entire response with our new, Blade-processed output.

        $event->replaceOutput(

            new RenderedContent($event->getOutput()->getDocument(), $content)

        );
    }

    protected function isCodeNode($node)
    {

        return $node instanceof FencedCode

            || $node instanceof IndentedCode

            || $node instanceof Code;
    }
}
