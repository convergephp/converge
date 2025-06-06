<?php

declare(strict_types=1);

namespace Converge\Support;

use Illuminate\Support\Str;
use Stringable;

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

    public function __toString()
    {
        $attributes = [];

        if (filled($this->style)) {
            $attributes[] = 'style="'.e($this->style).'"';
        }

        if (filled($this->classes)) {
            $attributes[] = 'class="'.e($this->classes).'"';
        }

        return implode(' ', $attributes);
    }

    public function merge(array $atts = [])
    {
        if (isset($atts['class'])) {
            $this->classes .= $atts['class'];
        }

        if (isset($atts['style'])) {
            $this->style .= ' '.Str::finish($atts['style'], ';');
        }

        return $this;
    }

    public function overideAttributes(array $atts = [])
    {
        if ($this->classes) {
            $atts['class'] = $this->classes;
        } else {
            $this->classes = $atts['class'];
        }

        return $this;
    }
}
