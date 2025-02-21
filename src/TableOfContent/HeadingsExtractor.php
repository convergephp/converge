<?php

declare(strict_types=1);

namespace Fluxtor\Converge\TableOfContent;

use DOMDocument;
use DOMXPath;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class HeadingsExtractor extends TableOfContent
{
    protected string $html;

    public function __construct(string $html)
    {
        $this->html = $html;
    }

    public static function make(string $html)
    {
        $static = app(static::class, [
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
        dd($this->minLevel);
        $minLevel = $this->minLevel;
        $maxLevel = $this->maxLevel;

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

        $usedSlugs = collect();

        $stack = [];

        foreach ($headingNodes as $headingNode) {
            $level = (int) ($headingNode->nodeName[1]);
            $text = $headingNode->textContent;
            $slug = Str::slug($text);

            $suffix = 1;
            while ($usedSlugs->contains($slug)) {
                $slug = Str::slug($text).'-'.$suffix;
                $suffix++;
            }

            $usedSlugs->add($slug);

            $headingItem = HeadingItem::make()
                ->level($level)
                ->label(trim($text, '#'))
                ->slug($slug);

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
