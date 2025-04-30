<?php

declare(strict_types=1);

namespace Converge\Markdown\Parsers;

use Converge\Markdown\Blocks\BladeComponentBlock;
use Exception;
use League\CommonMark\Node\Block\AbstractBlock;
use League\CommonMark\Parser\Block\AbstractBlockContinueParser;
use League\CommonMark\Parser\Block\BlockContinue;
use League\CommonMark\Parser\Block\BlockContinueParserInterface;
use League\CommonMark\Parser\Block\BlockStart;
use League\CommonMark\Parser\Block\BlockStartParserInterface;
use League\CommonMark\Parser\Cursor;
use League\CommonMark\Parser\MarkdownParserStateInterface;

/**
 * The usage of this style to inject Blade components natively is postponed
 * to future versions since it seems buggy with some of our Blade components.
 */
class SelfClosingBladeComponentBlockParser extends AbstractBlockContinueParser
{
    private BladeComponentBlock $block;

    private bool $closed = false;

    private bool $isInlineClosed = false;

    public function __construct()
    {
        $this->block = new BladeComponentBlock();
    }

    /**
     * Creates a parser for detecting block start.
     */
    public static function createBlockStartParser(): BlockStartParserInterface
    {
        return new class implements BlockStartParserInterface
        {
            public function tryStart(Cursor $cursor, MarkdownParserStateInterface $parserState): ?BlockStart
            {
                $line = $cursor->getLine();

                // Check for self-closing Blade component on the same line.
                $pattern = "/^<\s*x[-:]([\w\-:.]+)(.*?)\/\s*>$/";

                if (preg_match($pattern, $line, $matches)) {
                    return BlockStart::of((new SelfClosingBladeComponentBlockParser())->closedImmediately())->at($cursor);
                }

                // Check for opening Blade component tag, which could span multiple lines.
                if (preg_match("/^<\s*x[-:]([\w\-:.]+)/", $line)) {
                    return BlockStart::of(new SelfClosingBladeComponentBlockParser())->at($cursor);
                }

                return BlockStart::none();
            }
        };
    }

    /**
     * Marks the block as closed immediately.
     */
    public function closedImmediately(): self
    {
        $this->isInlineClosed = true;

        return $this;
    }

    /**
     * Retrieves the associated block.
     */
    public function getBlock(): AbstractBlock
    {
        return $this->block;
    }

    /**
     * Indicates if the block can have lazy continuation lines.
     */
    public function canHaveLazyContinuationLines(): bool
    {
        return true;
    }

    /**
     * Adds a line to the block.
     */
    public function addLine(string $line): void
    {
        $this->block->addLine($line);
    }

    /**
     * Attempts to continue the block parsing.
     */
    public function tryContinue(Cursor $cursor, BlockContinueParserInterface $activeBlockParser): ?BlockContinue
    {
        // If the block was closed on the same line, finish the parsing.
        if ($this->isInlineClosed) {
            $this->closed = true;

            return BlockContinue::finished();
        }

        // If it's not self-closing and needs to be continued, check if the closing tag appears on the next line.
        $line = $cursor->getLine();
        $pattern = "/\/\s*>$/";

        if (preg_match($pattern, $line)) {
            $this->block->addLine($line);
            $this->closed = true;

            return BlockContinue::finished();
        }

        return BlockContinue::at($cursor); // Continue if the block is still open.
    }

    /**
     * Closes the block, throwing an exception if it's not closed properly.
     *
     * @throws Exception
     */
    public function closeBlock(): void
    {
        if (! $this->closed) {
            throw new Exception('Blade component was not closed properly.');
        }
        $this->block->finalize();
    }
}
