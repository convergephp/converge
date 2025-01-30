<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Documents;

use Illuminate\Support\Str;
use Tempest\Highlight\Highlighter;
use League\CommonMark\Util\HtmlFilter;
use Tempest\Highlight\CommonMark\HighlightExtension;
use League\CommonMark\Extension\Autolink\AutolinkExtension;
use League\CommonMark\Extension\TaskList\TaskListExtension;
use Fluxtor\Converge\Markdown\Extensions\BladeParserExtension;
use Fluxtor\Converge\Markdown\Extensions\BladeDetectorExtension;
use League\CommonMark\Extension\TableOfContents\TableOfContentsExtension;
use League\CommonMark\Extension\HeadingPermalink\HeadingPermalinkExtension;

class Markdown
{
    protected $options = [];

    protected $extentions = [];

    public function convert(string $markdown)
    {

        $html = Str::markdown(
            string: $markdown,
            options: [
                'html_input' =>  HtmlFilter::ALLOW,
                'allow_unsafe_links' => false,
                'max_nesting_level' => 5,
                'heading_permalink' => [
                    'symbol' => '#',
                ],
                'table_of_contents' => [
                    'style' => 'bullet',
                    'position' => 'top',
                    'normalize' => 'relative',
                ],
            ],
            extensions: [
                new HighlightExtension(new Highlighter()),
                new HeadingPermalinkExtension(),
                new TableOfContentsExtension(),
                new BladeDetectorExtension(),
                new AutolinkExtension(),
                new TaskListExtension(),
                new BladeParserExtension()
            ],
        );

        return $html;
    }
}
