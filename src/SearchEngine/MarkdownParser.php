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
        // get rid of intended code that has a tab or more than 4 spaces
        $lines = explode("\n", $contents);

        $lines = array_filter($lines, function ($line) {
            return !empty(trim($line)); // Remove empty or just-whitespace lines
        });

        $filteredLines = [];


        foreach ($lines as $line) {
            // Check if the line is an indented code block
            if (preg_match('/^( {4,}|\t)/', $line)) {
                continue; // Skip this line
            }

            // Add non-code lines to filtered output
            $filteredLines[] = $line;
        }

        return implode("\n", $filteredLines);
    }
}
