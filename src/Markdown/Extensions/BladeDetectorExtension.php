<?php

namespace Fluxtor\Converge\Markdown\Extensions;

use League\CommonMark\Parser\Block\BlockStartParserInterface;
use League\CommonMark\Parser\Block\AbstractBlockContinueParser;


class BladeDetectorExtension extends AbstractBlockContinueParser 
{
    public static function createBlockStartParser(): BlockStartParserInterface
    {
        return new class implements BlockStartParserInterface
        {
            // TODO: implement the tryStart() method here
        };
    } 

}
