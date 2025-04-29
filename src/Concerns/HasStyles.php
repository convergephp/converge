<?php

declare(strict_types=1);

namespace Converge\Concerns;

trait HasStyles
{
    protected ?string $classes = null;

    protected string|array|null $styles = [];

    public function styles(string|array|null $styles)
    {
        $this->styles = $styles;

        return $this;
    }

    public function classes(string|array|null $classes)
    {
        $this->classes = $classes;

        return $this;
    }

    public function getClasses(): ?string
    {
        return $this->classes;
    }

    public function getStyles(): ?string
    {
        return $this->format_styles($this->styles);
    }

    protected function format_styles(array|string|null $styles): ?string
    {
        if (is_null($styles)) {
            return null;
        }

        if (is_array($styles)) {
            $styleString = '';
            foreach ($styles as $key => $value) {
                $styleString .= $key.':'.$value.';';
            }

            return $styleString;
        }

        return $styles;
    }
}
