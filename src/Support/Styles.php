<?php

namespace Fluxtor\Converge\Support;

use Stringable;
use Illuminate\Support\Str;

class Styles implements Stringable
{
    protected ?string $style = null;
    protected ?string $classes = null;

    public function __construct(
        ?string $style = null,
        ?string $classes = null
    ) {
        $this->style = $style;
        $this->classes = $classes;
    }


    public function merge(array $atts = [])
    {
        if (isset($atts['class'])) {
            $this->classes .= $atts['class'];
        }

        if (isset($atts['style'])) {
            $this->style .= ' ' . Str::finish($atts['style'], ';');
        }
        return $this;
    }

    public function __toString()
    {
        $attributes = [];

        if (filled($this->style)) {
            $attributes[] = 'style="' . e($this->style) . '"';
        }

        if (filled($this->classes)) {
            $attributes[] = 'class="' . e($this->classes) . '"';
        }

        return implode(' ', $attributes);
    }
}
