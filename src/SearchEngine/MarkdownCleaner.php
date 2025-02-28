<?php

namespace Fluxtor\Converge\SearchEngine;

use League\CommonMark\Node\Block\Document;
use League\CommonMark\Extension\Table\Table;
use League\CommonMark\Parser\MarkdownParser;
use League\CommonMark\Environment\Environment;
use League\CommonMark\Extension\Table\TableRow;
use League\CommonMark\Extension\Table\TableCell;
use League\CommonMark\Extension\Table\TableExtension;
use League\CommonMark\Extension\Table\TableSection;
use League\CommonMark\Extension\CommonMark\Node\Block\Heading;
use League\CommonMark\Extension\CommonMark\Node\Block\ListItem;
use League\CommonMark\Extension\CommonMark\Node\Block\ListBlock;
use League\CommonMark\Extension\CommonMark\CommonMarkCoreExtension;

class MarkdownCleaner
{
    protected string $contents;
    protected Document $document;

    public function __construct(string $contents)
    {
        $this->contents = $contents;
        $this->initializeParser();
    }

    public static function make(string $contents): self
    {
        return new self($contents);
    }

    protected function initializeParser(): void
    {
        $environment = new Environment();
        $environment->addExtension(new CommonMarkCoreExtension());
        $environment->addExtension(new TableExtension());

        $parser = new MarkdownParser($environment);
        $this->document = $parser->parse($this->contents);
    }

    public function clean(): array
    {
        return [
            'headings' => $this->extractHeadings(),
            'lists' => $this->extractLists(),
            'tables' => $this->extractTables(),
        ];
    }

    protected function extractHeadings(): array
    {
        $headings = [];
        $walker = $this->document->walker();
        while ($event = $walker->next()) {
            $node = $event->getNode();
            if ($event->isEntering() && $node instanceof Heading) {
                $headings[] = [
                    'level' => $node->getLevel(),
                    'text' => $this->getNodeText($node),
                ];
            }
        }
        return $headings;
    }

    protected function extractLists(): array
    {
        $lists = [];
        $walker = $this->document->walker();
        while ($event = $walker->next()) {
            $node = $event->getNode();
            if ($event->isEntering() && $node instanceof ListBlock) {
                $lists[] = $this->parseListBlock($node);
            }
        }
        return $lists;
    }

    protected function parseListBlock(ListBlock $listBlock): array
    {
        $listData = [
            'type' => $listBlock->getListData()->type,
            'items' => [],
        ];

        foreach ($listBlock->children() as $listItem) {
            if ($listItem instanceof ListItem) {
                $listData['items'][] = $this->parseListItem($listItem);
            }
        }

        return $listData;
    }

    protected function parseListItem(ListItem $listItem): array
    {
        $item = [
            'text' => $this->getNodeText($listItem),
            'children' => [],
        ];

        foreach ($listItem->children() as $child) {
            if ($child instanceof ListBlock) {
                $item['children'][] = $this->parseListBlock($child);
            }
        }

        return $item;
    }

    protected function extractTables(): array
    {
        $tables = [];
        $walker = $this->document->walker();
        while ($event = $walker->next()) {
            $node = $event->getNode();
            if ($event->isEntering() && $node instanceof Table) {
                $tables[] = $this->parseTable($node);
            }
        }
        return $tables;
    }

    protected function parseTable(Table $table): array
    {
        $tableData = [];
        foreach ($table->children() as $section) {
            if ($section instanceof TableSection) {
                $sectionType = $section->getType();
                foreach ($section->children() as $row) {
                    if ($row instanceof TableRow) {
                        $rowData = [];
                        foreach ($row->children() as $cell) {
                            if ($cell instanceof TableCell) {
                                $rowData[] = $this->getNodeText($cell);
                            }
                        }
                        if (!empty($rowData)) {
                            $tableData[$sectionType][] = $rowData;
                        }
                    }
                }
            }
        }       
        return $tableData;
    }

    protected function getNodeText($node): string
    {
        $text = '';
        foreach ($node->children() as $child) {
            if ($child instanceof \League\CommonMark\Node\Inline\Text) {
                $text .= $child->getLiteral();
            } else {
                $text .= $this->getNodeText($child);
            }
        }
        return trim($text);
    }
}