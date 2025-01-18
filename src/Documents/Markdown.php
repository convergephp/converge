<?php

declare(strict_types=1);

namespace Fluxtor\Converge\Documents;

use Illuminate\Support\Str;
use League\CommonMark\Extension\Autolink\AutolinkExtension;
use League\CommonMark\Extension\HeadingPermalink\HeadingPermalinkExtension;
use League\CommonMark\Extension\TableOfContents\TableOfContentsExtension;
use League\CommonMark\Extension\TaskList\TaskListExtension;
use Tempest\Highlight\CommonMark\HighlightExtension;
use Tempest\Highlight\Highlighter;

class Markdown
{
    protected $options = [];

    protected $extentions = [];

    public function convert(string $markdown)
    {

        // dd(new Highlighter());
        $html = Str::markdown(
            string: $markdown,
            options: [
                'html_input' => 'strip',
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
                new AutolinkExtension(),
                new TaskListExtension(),
            ],
        );

        return $html;
    }
}
