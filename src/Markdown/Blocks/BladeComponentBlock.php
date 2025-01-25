<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Markdown\Blocks;

use League\CommonMark\Node\Block\AbstractBlock;
use League\CommonMark\Node\StringContainerInterface;

class BladeComponentBlock extends AbstractBlock implements StringContainerInterface
{
    private string $literal = '';

    public function addLine(string $line): void
    {
        $this->literal .= $line."\n";
    }

    public function finalize(): void
    {
        $this->literal = trim($this->literal);
    }

    public function setLiteral(string $literal): void
    {
        $this->literal = $literal;
    }

    public function getLiteral(): string
    {
        return $this->literal;
    }
}
