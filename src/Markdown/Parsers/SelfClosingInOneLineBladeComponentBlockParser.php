<?php

namespace Fluxtor\Converge\Markdown\Parsers;

use League\CommonMark\Parser\Cursor;
use League\CommonMark\Parser\Block\BlockStart;
use League\CommonMark\Node\Block\AbstractBlock;
use League\CommonMark\Parser\Block\BlockContinue;
use Fluxtor\Converge\Markdown\Blocks\BladeComponentBlock;
use League\CommonMark\Parser\MarkdownParserStateInterface;
use League\CommonMark\Parser\Block\BlockStartParserInterface;
use League\CommonMark\Parser\Block\AbstractBlockContinueParser;
use League\CommonMark\Parser\Block\BlockContinueParserInterface;

class SelfClosingBladeComponentBlockParser extends AbstractBlockContinueParser
{
    private BladeComponentBlock $block;
    private bool $closed = false;

    public function __construct()
    {
        $this->block = new BladeComponentBlock();
    }

    public function getBlock(): AbstractBlock
    {
        return $this->block;
    }

    public function canHaveLazyContinuationLines(): bool
    {
        return true;
    }

    public function addLine(string $line): void
    {
        $this->block->addLine($line);
    }


    public function tryContinue(Cursor $cursor, BlockContinueParserInterface $activeBlockParser): ?BlockContinue
    {
        $line = $cursor->getLine();

        $pattern = "/\/\s*>$/";

        if (preg_match($pattern, $line)) {
            $this->block->addLine($line);
            $this->closed = true;
            return BlockContinue::finished();
        }

        return BlockContinue::at($cursor);
    }

    public function closeBlock(): void
    {
        if (!$this->closed) {
            throw new \Exception("Blade component was not closed properly");
        }
        $this->block->finalize();
    }

    public static function createBlockStartParser(): BlockStartParserInterface
    {
        return new class implements BlockStartParserInterface
        {
            /**
             * Check whether we should handle the block at the current position
             *
             * @param Cursor                       $cursor
             * @param MarkdownParserStateInterface $parserState
             *
             * @return BlockStart|null
             */
            public function tryStart(Cursor $cursor, MarkdownParserStateInterface $parserState): ?BlockStart
            {
                $line = $cursor->getLine();

                // has closing tag in the same line 
                $pattern = "/<\s*x[-:]([\w\-:.]+)(.*?)\/\s*>$/";

                if (preg_match($pattern, $line, $matches)) {
                    dd($matches);
                    return BlockStart::of(new SelfClosingBladeComponentBlockParser())->at($cursor);
                }

                return BlockStart::none();
            }
        };
    }
}
