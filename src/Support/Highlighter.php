<?php

declare(strict_types=1);

namespace Converge\Support;

final class Highlighter
{
    public static function make(?string $text, ?string $pattern, ?string $styles = '', ?string $classes = '')
    {

        if (blank($pattern)) {
            return $text;
        }

        $highlightedPattern = '<span';

        if (! empty($classes)) {

            $highlightedPattern .= ' class="'.$classes.'"';
        }

        if (! empty($styles)) {

            $highlightedPattern .= ' style="'.$styles.'"';
        }

        $highlightedPattern .= '>$0</span>';

        return preg_replace('/('.preg_quote($pattern, '/').')/i', $highlightedPattern, $text);
    }
}
