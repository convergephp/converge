<?php
namespace Fluxtor\Converge\Markdown\Blocks;


use League\CommonMark\Node\Block\AbstractBlock;
use League\CommonMark\Node\StringContainerInterface;

class BladeComponentBlock extends AbstractBlock implements StringContainerInterface
{
    private string $content = '';

    public function addLine(string $line): void
    {
        $this->content .= $line . "\n";
    }

    public function finalize(): void
    {
        $this->content = trim($this->content);
    }

    public function getContent(): string
    {
        return $this->content;
    }
}
