<?php

declare(strict_types=1);

namespace Converge\TableOfContent;

use DOMDocument;
use DOMXPath;
use Illuminate\Support\Collection;

use function Converge\converge;

class HeadingsExtractor
{
    protected string $html;

    public function __construct(string $html)
    {
        $this->html = $html;
    }

    public static function make(string $html)
    {
        $static = resolve(static::class, [
            'html' => $html,
        ]);

        return $static;
    }

    /**
     * Extract all headings from the HTML respecting the min and max level.
     *
     * @return Collection A collection of headings with 'level' and 'text' keys.
     */
    public function getHeadings(): Collection
    {
        $tableOfContent = converge()->getTableOfContent();

        [$minLevel, $maxLevel] = [$tableOfContent->getMinLevel(), $tableOfContent->getMaxLevel()];

        if (trim($this->html) === '') {
            return collect();
        }

        $dom = new DOMDocument;
        @$dom->loadHTML(mb_convert_encoding($this->html, 'HTML-ENTITIES', 'UTF-8'));

        $xpath = new DOMXPath($dom);
        $range = collect(range($minLevel, $maxLevel));
        $expression = $range->map(fn ($level) => "//h$level")->implode('|');

        $headingNodes = $xpath->query($expression);

        $headings = collect();

        $stack = [];

        foreach ($headingNodes as $headingNode) {

            if (mb_strpos($headingNode->getAttribute('class'), 'co-skip') !== false) {
                continue;
            }
            $level = (int) ($headingNode->nodeName[1]);

            $anchorNode = $xpath->query('.//a', $headingNode)->item(0);

            $text = $headingNode->textContent;

            $headingItem = HeadingItem::make()
                ->level($level)
                ->label(trim($text, '#'))
                ->slug($anchorNode?->getAttribute('href'));

            while (! empty($stack) && end($stack)->getLevel() >= $level) {
                array_pop($stack);
            }

            if (empty($stack)) {
                $headings->push($headingItem);
            } else {
                end($stack)->addChild($headingItem);
            }

            $stack[] = $headingItem;
        }

        return $headings;
    }
}
