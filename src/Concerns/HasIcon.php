<?php

namespace Fluxtor\Converge\Concerns;

use Closure;
use Fluxtor\Converge\Enums\IconSize;
use Fluxtor\Converge\Enums\IconPosition;
use Illuminate\Contracts\Support\Htmlable;

trait HasIcon
{
    protected string | Closure | Htmlable | null $icon = null;

    protected IconPosition | string | Closure | null $iconPosition = null;

    protected IconSize | string | Closure | null $iconSize = null;

    public function icon(string | Closure | null $icon): static
    {
        $this->icon = $icon;

        return $this;
    }

    public function iconPosition(IconPosition | string | Closure | null $position): static
    {
        $this->iconPosition = $position;

        return $this;
    }

    public function iconSize(IconSize | string | Closure | null $size): static
    {
        $this->iconSize = $size;

        return $this;
    }

    public function getIcon()
    {

        if (($icon = $this->resolve($this->icon)) instanceof Htmlable) {
            return $icon->toHtml();
        }
        return $this->resolve($this->icon);
    }

    public function getIconPosition(): IconPosition | string
    {
        return $this->resolve($this->iconPosition) ?? IconPosition::Before;
    }

    public function getIconSize(): IconSize | string | null
    {
        return $this->resolve($this->iconSize);
    }
}
