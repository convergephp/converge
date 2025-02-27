<?php

namespace Fluxtor\Converge\SearchEngine;

use League\CommonMark\Node\Query;
use League\CommonMark\Node\Block\Paragraph;
use League\CommonMark\Extension\Table\Table;
use League\CommonMark\Parser\MarkdownParser;
use League\CommonMark\Environment\Environment;
use League\CommonMark\Extension\Table\TableRow;
use League\CommonMark\Extension\Table\TableCell;
use League\CommonMark\Extension\Table\TableExtension;
use League\CommonMark\Extension\CommonMark\Node\Inline\Link;
use League\CommonMark\Extension\CommonMark\Node\Block\Heading;
use League\CommonMark\Extension\CommonMark\Node\Block\ListItem;
use League\CommonMark\Extension\CommonMark\Node\Block\ListBlock;
use League\CommonMark\Extension\CommonMark\Node\Block\BlockQuote;
use League\CommonMark\Extension\CommonMark\CommonMarkCoreExtension;


class MarkdownCleaner
{

    protected string $contents;

    public function __construct($contents)
    {
        $this->contents = $contents;
    }

    public static function make($contents)
    {
        return new static($contents);
    }

    public function clean()
    {
        $environment = new Environment();
        $environment->addExtension(new CommonMarkCoreExtension());
        $environment->addExtension(new TableExtension());

        $parser = new MarkdownParser($environment);
        $document = $parser->parse($this->contents);

        $matchingNodes = (new Query())
            ->where(Query::type(Paragraph::class))
            ->orWhere(Query::type(BlockQuote::class))
            ->andWhere(Query::hasChild(Query::type(Link::class)))
            ->findAll($document);

        dd($matchingNodes);

        $walker = $document->walker();
        while ($event = $walker->next()) {
            dd($event->getNode());
            echo 'Now ' . ($event->isEntering() ? 'entering' : 'leaving') . ' a ' . get_class($event->getNode()) . ' node' . "\n";
        }

        $data = [
            'headings' => [],
            'lists' => [],
            'tables' => [],
        ];

        dd($document->iterator());
        foreach ($document->iterator() as $node) {
            // Extract Headings
            if ($node instanceof Heading) {


                $data['headings'][] = [
                    'level' => $node->getLevel(),
                    // 'text' => $node->firstChild()->getLiteral(),
                ];

                dd($node);
            }

            // Extract Lists
            if ($node instanceof ListBlock) {
                $listItems = [];
                foreach ($node->children() as $item) {
                    if ($item instanceof ListItem) {
                        dd($item);
                        // $listItems[] = trim($item->firstChild()->getLiteral());
                    }
                }
                $data['lists'][] = $listItems;
            }

            // Extract Tables
            if ($node instanceof Table) {
                $tableData = [];
                foreach ($node->children() as $row) {
                    if ($row instanceof TableRow) {
                        $rowData = [];
                        foreach ($row->children() as $cell) {
                            if ($cell instanceof TableCell) {
                                $rowData[] = trim($cell->firstChild()->getLiteral());
                            }
                        }
                        $tableData[] = $rowData;
                    }
                }
                $data['tables'][] = $tableData;
            }
        }

        return $data;
    }
}
