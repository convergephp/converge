<?php

declare(strict_types=1);

namespace Converge\Documents;

use Converge\Markdown\Extensions\BladeCompilerExtension;
use Illuminate\Support\Str;
use League\CommonMark\Extension\Autolink\AutolinkExtension;
use League\CommonMark\Extension\HeadingPermalink\HeadingPermalinkExtension;
use League\CommonMark\Extension\TaskList\TaskListExtension;
use League\CommonMark\Util\HtmlFilter;
use Tempest\Highlight\CommonMark\HighlightExtension;
use Tempest\Highlight\Highlighter;

class Markdown
{
    protected $options = [];

    protected $extentions = [];

    public function convert(string $markdown)
    {

        $html = Str::markdown(
            string: $markdown,
            options: [
                'html_input' => HtmlFilter::ALLOW,
                'allow_unsafe_links' => false,
                'max_nesting_level' => 6,
                'heading_permalink' => [
                    'symbol' => '#',
                ],
            ],
            extensions: [
                new HighlightExtension((new Highlighter())->withGutter(startAt: 1)),
                new HeadingPermalinkExtension(),
                new BladeCompilerExtension(),
                new AutolinkExtension(),
                new TaskListExtension(),
            ],
        );

        return $html;
    }
}
