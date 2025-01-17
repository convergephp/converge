<?php

namespace Fluxtor\Converge\Documents;

use Illuminate\Support\Str;
use Tempest\Highlight\Highlighter;
use Tempest\Highlight\CommonMark\HighlightExtension;
use League\CommonMark\Extension\Autolink\AutolinkExtension;
use League\CommonMark\Extension\TaskList\TaskListExtension;
use League\CommonMark\Extension\TableOfContents\TableOfContentsExtension;
use League\CommonMark\Extension\HeadingPermalink\HeadingPermalinkExtension;

class Markdown
{
    protected $options = [];
    protected $extentions = [];


    public function convert(string $markdown)
    {   
        dd(new Highlighter());
        
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
                ],
            ],
            extensions: [
                // new HighlightExtension(),
                new HeadingPermalinkExtension(),
                new TableOfContentsExtension(),
                new AutolinkExtension(),
                new TaskListExtension(),
            ],
        );
        return $html;
    }
}
