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

/**
 *  The usage of this style to inject blade components natively is postponed
 * to future versions since it seems buggy with
 * some of our Blade components. 
 */
class BladeComponentBlockParser extends AbstractBlockContinueParser
{
    private BladeComponentBlock $block;

    public function __construct(
        public string $componentName
    ) {
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
                // $line = $cursor->getLine();


                if ($match = $cursor->match("/<\s*x[-:]([\w\-:.]+)>/")) {
                    return  BlockStart::of(new BladeComponentBlockParser($match))->at($cursor);
                }

                // if (preg_match($pattern, $line, $matches)) {
                //     // dump("openning tag: $matches[1]");
                //     $block = BlockStart::of($obj = new BladeComponentBlockParser($matches[1]))->at($cursor);
                //     //    dd($block);
                //     return $block;
                // }

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

        $closingTag = "</x-{$this->componentName}>";

        if ($cursor->match($closingTag)) {
            return BlockContinue::finished();
        }

        if (str_contains($line, $closingTag)) {
            $this->block->addLine($line);
            return BlockContinue::finished();
        }

        return BlockContinue::at($cursor);
    }

    public function closeBlock(): void
    {
        $this->block->finalize();
    }
}
