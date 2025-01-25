<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Markdown\Parsers;

use Fluxtor\Converge\Markdown\Blocks\BladeComponentBlock;
use League\CommonMark\Node\Block\AbstractBlock;
use League\CommonMark\Parser\Block\AbstractBlockContinueParser;
use League\CommonMark\Parser\Block\BlockContinue;
use League\CommonMark\Parser\Block\BlockContinueParserInterface;
use League\CommonMark\Parser\Block\BlockStart;
use League\CommonMark\Parser\Block\BlockStartParserInterface;
use League\CommonMark\Parser\Cursor;
use League\CommonMark\Parser\MarkdownParserStateInterface;

class BladeComponentBlockParser extends AbstractBlockContinueParser
{
    private BladeComponentBlock $block;

    public function __construct()
    {
        $this->block = new BladeComponentBlock();
    }

    public static function createBlockStartParser(): BlockStartParserInterface
    {
        return new class implements BlockStartParserInterface
        {
            /**
             * Check whether we should handle the block at the current position
             */
            public function tryStart(Cursor $cursor, MarkdownParserStateInterface $parserState): ?BlockStart
            {
                if (str_contains($cursor->getLine(), '<x-converge::tabs>')) {
                    return BlockStart::of(new BladeComponentBlockParser())->at($cursor);
                }

                return BlockStart::none();
            }
        };
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
        if (str_contains($line, '</x-converge::tabs>')) {
            // $this->block->addLine($line);
            return BlockContinue::none();
        }

        return BlockContinue::at($cursor);
    }

    public function closeBlock(): void
    {
        $this->block->finalize();
    }
}
