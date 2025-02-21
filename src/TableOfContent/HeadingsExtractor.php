<?php

namespace Fluxtor\Converge\TableOfContent;

use DOMXPath;
use DOMDocument;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Illuminate\Support\Collection;

class HeadingsExtractor
{
    protected string $html;

    protected int $minLevel = 1;

    protected int $maxLevel = 3;



    public function __construct(string $html)
    {
        $this->html = $html;
    }

    public function maxLevel(int $maxLevel)
    {
        $this->maxLevel = $maxLevel;
    }

    public function minLevel(int $minLevel)
    {
        $this->minLevel = $minLevel;
    }

    public function getMaxLevel()
    {
        return $this->maxLevel;
    }

    public function getMinLevel()
    {
        return $this->minLevel;
    }




    // public function getTocHtml(): string
    // {
    //     $headings = $this->getHeadings();

    //     if ($headings->isEmpty()) {
    //         return '';
    //     }

    //     $startLevel = $headings->pluck('level')->min();
    //     $prev = $startLevel;


    //     // ------------------------------------------------------------------
    //     // Build the table of contents as an ordered list
    //     // ------------------------------------------------------------------

    //     $toc = "<ul>";

    //     foreach ($headings as $heading) {
    //         $level = $heading['level'];
    //         $text = $heading['text'];
    //         $slug = $heading['slug'];

    //         // Calculate depth change
    //         $depthChange = $level - $prev;

    //         // Close the previous list(s) if the current heading is of a lower level
    //         if ($depthChange < 0) {
    //             $toc .= str_repeat("</ul>", abs($depthChange));
    //         }

    //         // Open a new list(s) if the current heading is of a higher level
    //         if ($depthChange > 0) {
    //             $toc .= str_repeat("<ul>", $depthChange);
    //         }

    //         // Add the current heading to the list
    //         $toc .= '<li><a href="#' . $slug . '">' . $text . '</a></li>';

    //         // Update the previous level
    //         $prev = $level;
    //     }

    //     // Close all remaining open lists
    //     while ($prev >= $startLevel) {
    //         $toc .= "</ul>";
    //         $prev--;
    //     }

    //     // ------------------------------------------------------------------

    //     return $toc;
    // }

    /**
     * Extract all headings from the HTML respecting the min and max level.
     *
     * @return Collection A collection of headings with 'level' and 'text' keys.
     */
    public function getHeadings(): Collection
    {
        $minLevel = $this->minLevel;
        $maxLevel = $this->maxLevel;

        if (trim($this->html) === '') {
            return collect();
        }

        $dom = new DOMDocument;
        @$dom->loadHTML(mb_convert_encoding($this->html, 'HTML-ENTITIES', 'UTF-8'));

        $xpath = new DOMXPath($dom);
        $range = collect(range($minLevel, $maxLevel));
        $expression = $range->map(fn($level) => "//h$level")->implode('|');

        $headingNodes = $xpath->query($expression);

        $headings = collect();

        $usedSlugs = collect();

        $stack = [];

        foreach ($headingNodes as $headingNode) {
            $level = intval($headingNode->nodeName[1]);
            $text = $headingNode->textContent;
            $slug = Str::slug($text);

            $suffix = 1;
            while ($usedSlugs->contains($slug)) {
                $slug = Str::slug($text) . '-' . $suffix;
                $suffix++;
            }

            $usedSlugs->add($slug);


            $headingItem = HeadingItem::make()
                ->level($level)
                ->label(trim($text, '#'))
                ->slug($slug);

            while (!empty($stack) && end($stack)->getLevel() >= $level) {
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
