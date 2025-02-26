<?php

namespace Fluxtor\Converge\SearchEngine;

class MarkdownParser
{
    protected string $contents;

    public function __construct($contents)
    {
        $this->contents = $contents;
    }

    public static function make($contents)
    {
        // dd($contents);
        return new static($contents);
    }


    public function removeCodeBlocks()
    {
        // get rid of fenced code blocks
        $contents = preg_replace('/^(```|~~~)[\s\S]+?\1/m', '', $this->contents);

        $contents = trim($contents);
        // $contents = preg_replace('/[\r\n]+/', "\n", $contents);

        // dd($contents);
        $lines = explode("\n", $contents);

        $lines = array_filter($lines, function ($line) {
            return !empty(trim($line)); // compact the file
        });

        // get rid of intended code that has a tab or more than 4 spaces

        $filteredLines = [];
        foreach ($lines as $line) {

            if (preg_match('/^( {4,}|\t)/', $line)) {
                continue; // Skip this line
            }

            // Add non-code lines to filtered output
            $filteredLines[] = $line;
        }

        $this->contents = implode("\n", $filteredLines);

        return $this;
    }

    public function extractHeadings()
    {
        preg_match_all('/^(#{1,6})\s*(.+)$/m', $this->contents, $matches, PREG_SET_ORDER);

        $headings = [];

        foreach ($matches as $match) {
            $level = strlen($match[1]);
            $headings[] = [
                'level' => $level,
                'title' => trim($match[2])
            ];
        }

        return dd($headings);
    }

    public function extractLists()
    {
        preg_match_all('/^( *)([-*+]|\d+\.)\s+(.+)$/m', $this->contents, $matches, PREG_SET_ORDER);

        $lists = [];
        $stack = []; // Stack to track nested levels

        foreach ($matches as $match) {
            $item = [
                'level' =>  strlen($match[1]) / 4, // Track nesting level
                'marker' => $match[2],
                'text' => trim($match[3]),
                'children' => []
            ];

            // Find correct parent based on indentation
            while (!empty($stack) && end($stack)['level'] >= $item['level']) {
                array_pop($stack);
            }

            if (empty($stack)) {
                // Top-level item
                $lists[] = $item;
                $stack[] = &$lists[count($lists) - 1];
            } else {
                // Nested item
                $parent = &$stack[count($stack) - 1];
                $parent['children'][] = $item;
                $stack[] = &$parent['children'][count($parent['children']) - 1];
            }
        }

        dd($lists);
    }


    // public function extractLists()
    // {
    //     preg_match_all('/^( *)([-*+]|\d+\.)\s+(.+)$/m', $this->contents, $matches, PREG_SET_ORDER);
    //     $lists = [];
    //     foreach ($matches as $match) {
    //         $lists[] = [
    //             'is_nested' => strlen($match[1]) > 0,
    //             'marker' => $match[2],
    //             'text' => $match[3]
    //         ];
    //     }

    //     dd($lists);
    // }
    public function getContents()
    {
        return $this->contents;
    }
}
