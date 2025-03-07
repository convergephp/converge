<?php

declare(strict_types=1);

namespace Fluxtor\Converge\SearchEngine;

use League\CommonMark\Normalizer\SlugNormalizer;

class ContentsParser
{
    private string $contents;

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
            return ! empty(trim($line)); // compact the file
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

    public function extractHeadings(string $path)
    {
        preg_match_all('/^(#{1,6})\s*(.+)$/m', $this->contents, $matches, PREG_SET_ORDER);

        $headings = [];

        $slugManager = new SlugNormalizer();
        $id = 0;
        foreach ($matches as $match) {

            $level = mb_strlen($match[1]);

            $headings[] = [
                'file_path' => $path,
                'level' => $level,
                'title' => trim($match[2]),
                'hash' => $slugManager->normalize($match[2]),
                'id' => $id,
            ];
            $id++;
        }

        return $headings;
    }

    public function extractLists()
    {
        preg_match_all('/^( *)([-*+]|\d+\.)\s+(.+)$/m', $this->contents, $matches, PREG_SET_ORDER);

        $lists = [];
        $stack = [];

        foreach ($matches as $match) {
            $item = [
                'level' => mb_strlen($match[1]) / 4,
                'marker' => $match[2],
                'text' => trim($match[3]),
                'children' => [],
            ];

            while (! empty($stack) && end($stack)['level'] >= $item['level']) {
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

    public function extractTable()
    {

        /**
         * we need to extract the heading and storing each item in assoc array like :
         * so :
         */
        $tableRows = [
            [
                'fruit' => 'apple',
                'color' => 'red',
                'taste' => 'sweet',
                'seas' => 'fall',
            ],
        ];

        // first we need to extract headers:
        preg_match_all('//', $this->contents, $matches);
    }

    public function extractTables(): array
    {
        $tables = [];
        $lines = explode("\n", $this->contents);
        $lineCount = count($lines);
        $currentTable = null;
        $expectedColumns = 0;

        for ($i = 0; $i < $lineCount; $i++) {
            $line = trim($lines[$i]);

            // Check if we're starting a new table
            if ($this->isTableHeaderLine($line, $lines[$i + 1] ?? '')) {
                $currentTable = [
                    'header' => $this->parseTableRow($line),
                    'rows' => [],
                ];
                $expectedColumns = count($currentTable['header']);
                $i++; // Skip separator line

                continue;
            }

            // If we're in a table block
            if ($currentTable !== null) {
                if ($this->isTableDataLine($line, $expectedColumns)) {
                    $currentTable['rows'][] = $this->parseTableRow($line);
                } else {
                    if (! empty($currentTable['rows'])) {
                        $tables[] = $currentTable;
                    }
                    $currentTable = null;
                }
            }
        }

        // Add any remaining table
        if ($currentTable !== null && ! empty($currentTable['rows'])) {
            $tables[] = $currentTable;
        }

        return $tables;
    }

    public function getContents()
    {
        return $this->contents;
    }

    public function getParagraphs() {}

    private function isTableHeaderLine(string $line, string $nextLine): bool
    {
        $hasPipes = str_contains($line, '|');
        $nextLineClean = preg_replace('/[^\|\-:]/', '', trim($nextLine));

        return $hasPipes && preg_match('/^\s*:?-+:?\s*(\|\s*:?-+:?\s*)+$/', $nextLineClean);
    }

    private function isTableDataLine(string $line, int $expectedColumns): bool
    {
        if (! str_contains($line, '|')) {
            return false;
        }

        $columns = count($this->parseTableRow($line));

        return $columns === $expectedColumns;
    }

    private function parseTableRow(string $row): array
    {
        $row = preg_replace('/\\\\\|/', 'TEMP_PIPE', $row);
        $cells = array_map('trim', explode('|', trim($row, '|')));

        return array_map(function ($cell) {
            return str_replace('TEMP_PIPE', '|', $cell);
        }, $cells);
    }
}
