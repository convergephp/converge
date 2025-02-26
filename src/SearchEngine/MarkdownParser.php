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

    public function getContents()
    {
        return $this->contents;
    }
}
