<?php

namespace Fluxtor\Converge\Markdown\Parsers;

use Fluxtor\Converge\Markdown\Blocks\BladeComponentBlock;
use League\CommonMark\Parser\InlineParserContext;
use League\CommonMark\Parser\Inline\InlineParserMatch;
use League\CommonMark\Parser\Inline\InlineParserInterface;

class SelfClosingInOneLineBladeComponentBlockParser extends InlineParserInterface
{

    public function getMatchDefinition(): InlineParserMatch
    {
        return InlineParserMatch::regex('/<\s*x[-:]([\w\-:.]+)(\s[^>]+)?\s*\/>/');
    }

    public function parse(InlineParserContext $inlineContext): bool
    {
        $cursor = $inlineContext->getCursor();
        $match = $inlineContext->getFullMatch();

        // Advance the cursor to the end of the match
        $cursor->advanceBy(strlen($match));

        $inlineContext->getContainer()->appendChild((new BladeComponentBlock())->setContents($match));

        return true; // Successfully parsed the match
    }
}
